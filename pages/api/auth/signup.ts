import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import { sessionOptions } from '@/lib/session';
import { getIronSession } from 'iron-session';

const prisma = new PrismaClient();

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
    const { email, password } = req.body;

    // Kiểm tra nếu email đã tồn tại trong cơ sở dữ liệu
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Tạo mã OTP ngẫu nhiên
    const otp = Math.floor(10000 + Math.random() * 90000).toString();

    // Lưu OTP, email và password vào session (không lưu vào DB)
    session.otp = otp;
    session.user = { email, password }; // Lưu mật khẩu trong session
    await session.save(); // Lưu session

    // Gửi email chứa mã OTP
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It will expire in 2 minutes.`,
    });

    return res.status(200).json({ message: 'OTP sent to your email' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
