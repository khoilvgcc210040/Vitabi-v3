import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/session';
import nodemailer from 'nodemailer';

// Thiết lập nodemailer để gửi email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession(req, res, sessionOptions);

  if (req.method === 'POST') {
    const { code, resend } = req.body;  // Nhận cả mã OTP và trường resend từ request

    if (resend) {
      // Tạo mã OTP mới khi người dùng nhấn "Resend Code"
      const newOtp = Math.floor(10000 + Math.random() * 90000).toString();

      // Lưu OTP mới vào session
      session.otp = newOtp;
      await session.save();

      // Gửi email với mã OTP mới
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: session.user?.email,
          subject: 'Your new OTP Code',
          text: `Your new OTP code is ${newOtp}. It will expire in 2 minutes.`,
        });

        return res.status(200).json({ message: 'OTP resent successfully' });
      } catch (error) {
        console.error('Failed to send OTP email:', error);
        return res.status(500).json({ message: 'Failed to send OTP email' });
      }
    } else {
      // Xác thực OTP
      const storedOtp = session.otp;
      const { email, password } = session.user || {};

      if (!storedOtp || !email || !password) {
        return res.status(400).json({ message: 'Session expired or no data found' });
      }

      if (storedOtp !== code) {
        return res.status(400).json({ message: 'The verification code is incorrect. Please try again.' });
      }

      // Xóa OTP khỏi session sau khi xác thực thành công
      session.otp = null;
      await session.save();

      return res.status(200).json({ message: 'OTP verified successfully' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
