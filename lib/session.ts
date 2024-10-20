import { IronSessionOptions } from 'iron-session';

export const sessionOptions: IronSessionOptions = {
  password: process.env.SESSION_SECRET || 'l1VbA9dm3RFJ5aQ8pYs2CzNt6UwXeO4rH7VkG0PlQijMfB5y',
  cookieName: 'myapp_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production', // cookie chỉ được gửi qua HTTPS khi ở chế độ production
  },
};

// Định nghĩa kiểu dữ liệu lưu trữ trong session
declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      email: string;
    };
    otp?: string;
  }
}
