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
        "Sign up": "Sign up",
        // MyData related
        "My data": "My data",
        "Profile": "Profile",
        "Insurance": "Insurance",
        "Medical Information": "Medical Information",
        "Saved Hospitals": "Saved Hospitals",
        "Password and Security": "Password and Security",
        "Setting": "Setting",
        "Vitabi Admin": "Vitabi Admin",
        "Change Password": "Change Password"
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
        "Sign up": "登録",
        // MyData related
        "My data": "マイデータ",
        "Profile": "プロフィール",
        "Insurance": "保険",
        "Medical Information": "医療情報",
        "Saved Hospitals": "保存された病院",
        "Password and Security": "パスワードとセキュリティ",
        "Setting": "設定",
        "Vitabi Admin": "Vitabi 管理者",
        "Change Password": "パスワードを変更する"
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
        "Sign up": "Đăng ký",
        // MyData related
        "My data": "Dữ liệu của tôi",
        "Profile": "Hồ sơ",
        "Insurance": "Bảo hiểm",
        "Medical Information": "Thông tin y tế",
        "Saved Hospitals": "Bệnh viện đã lưu",
        "Password and Security": "Mật khẩu và bảo mật",
        "Setting": "Cài đặt",
        "Vitabi Admin": "Quản trị Vitabi",
        "Change Password": "Đổi mật khẩu"
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
