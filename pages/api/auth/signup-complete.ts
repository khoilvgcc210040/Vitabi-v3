import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/session';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getIronSession(req, res, sessionOptions);

  if (req.method === 'POST') {
    const { firstname, surname, gender, dob, phone, countryCode } = req.body;

    // Lấy email và mật khẩu từ session
    const { email, password } = session.user || {};

    if (!email || !password) {
      return res.status(400).json({ message: 'No email or password found in session. Please restart the signup process.' });
    }

    // Kiểm tra nếu email đã tồn tại
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await hash(password, 10);

    // Lưu người dùng vào cơ sở dữ liệu
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstname,
        surname,
        gender,
        dob: new Date(dob),
        phone,
        countryCode, 
      },
    });

    // Xóa session sau khi đăng ký thành công
    session.user = null;
    await session.save();

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
