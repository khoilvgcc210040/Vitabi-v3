import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcryptjs';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '@/lib/session';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Kiểm tra email có tồn tại không
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Kiểm tra mật khẩu
      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Lưu thông tin người dùng vào session nếu đăng nhập thành công
      const session = await getIronSession(req, res, sessionOptions);
      session.user = {
        id: user.id,
        email: user.email,
        firstname: user.firstname,
        surname: user.surname,
      };
      await session.save();

      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
