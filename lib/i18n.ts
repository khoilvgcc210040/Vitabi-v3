import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Login": "Login",
        "Enter email": "Enter email",
        "Enter password": "Enter password",
        "Email or password does not valid": "Email or password does not valid",
        "Register": "Register",
        "Don&apos;t have an account?": "Don't have an account?",
      }
    },
    jp: {
      translation: {
        "Login": "ログイン",
        "Enter email": "メールアドレスを入力",
        "Enter password": "パスワードを入力",
        "Email or password does not valid": "メールまたはパスワードが無効です",
        "Register": "登録",
        "Don&apos;t have an account?": "アカウントをお持ちではありませんか？",
      }
    },
    vi: {
      translation: {
        "Login": "Đăng nhập",
        "Enter email": "Nhập email",
        "Enter password": "Nhập mật khẩu",
        "Email or password does not valid": "Email hoặc mật khẩu không hợp lệ",
        "Register": "Đăng ký",
        "Don&apos;t have an account?": "Chưa có tài khoản?",
      }
    },
  },
  lng: "en", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
