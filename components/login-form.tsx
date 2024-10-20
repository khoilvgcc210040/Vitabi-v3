"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/card-wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Sử dụng router để điều hướng
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n"; // Import file i18n
import "flag-icon-css/css/flag-icons.min.css"; // Import flag-icon-css

export const LoginForm = () => {
  const [error, setError] = useState<string>(""); // State để lưu thông báo lỗi
  const [loading, setLoading] = useState<boolean>(false); // State cho trạng thái loading
  const { t } = useTranslation();
  const router = useRouter(); // Router để chuyển hướng sau khi login thành công

  const [language, setLanguage] = useState<string>("en");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Ref cho các input để focus khi có lỗi
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Thay đổi ngôn ngữ
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  // Cập nhật thông báo lỗi mỗi khi ngôn ngữ thay đổi
  useEffect(() => {
    if (error) {
      setError(t("Email or password does not valid"));
    }
  }, [language, error, t]); // Theo dõi ngôn ngữ và error

  // Hàm xử lý submit form đăng nhập
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const emailInput = emailRef.current?.value;
    const passwordInput = passwordRef.current?.value;

    // Kiểm tra nếu email hoặc mật khẩu bị bỏ trống
    if (!emailInput || !passwordInput) {
      setError(t("Email or password does not valid")); // Hiển thị lỗi qua hệ thống dịch ngôn ngữ
      if (!emailInput) emailRef.current?.focus(); // Focus vào trường bị bỏ trống
      else passwordRef.current?.focus();
      return;
    }

    // Kiểm tra định dạng email
    if (!emailInput.includes("@")) {
      setError(t("Enter a valid email"));
      emailRef.current?.focus(); // Focus vào trường email khi lỗi định dạng
      return;
    }

    // Kiểm tra độ dài mật khẩu
    if (passwordInput.length < 6) {
      setError(t("Password must be at least 6 characters"));
      passwordRef.current?.focus(); // Focus vào trường mật khẩu khi ngắn quá
      return;
    }

    setError(""); // Xóa lỗi nếu thông tin hợp lệ
    setLoading(true); // Bắt đầu trạng thái loading

    try {
      // Gửi yêu cầu đăng nhập tới API
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || t("An unexpected error occurred"));
      } else {
        // Đăng nhập thành công
        setError("");
        router.push("/dashboard"); // Chuyển hướng tới dashboard hoặc trang khác
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(t("An unexpected error occurred"));
    } finally {
      setLoading(false); // Kết thúc trạng thái loading
    }
  };

  return (
    <CardWrapper
      headerLabel={
        <div className="relative inline-block">
          <button
            className="inline-flex items-center bg-white border border-gray-300 rounded px-2 py-1"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <span
              className={`flag-icon flag-icon-${
                language === "en" ? "us" : language === "jp" ? "jp" : "vn"
              } mr-2`}
            ></span>
            <span>
              {language === "en"
                ? "English"
                : language === "jp"
                ? "日本語"
                : "Tiếng Việt"}
            </span>
            <svg
              className="ml-2 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute bg-white border border-gray-300 rounded shadow-lg">
              <ul className="w-48">
                <li
                  onClick={() => handleLanguageChange("en")}
                  className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <span className="flag-icon flag-icon-us mr-2"></span>
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("jp")}
                  className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <span className="flag-icon flag-icon-jp mr-2"></span>
                  日本語
                </li>
                <li
                  onClick={() => handleLanguageChange("vi")}
                  className="cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100"
                >
                  <span className="flag-icon flag-icon-vn mr-2"></span>
                  Tiếng Việt
                </li>
              </ul>
            </div>
          )}
        </div>
      }
      backButtonLabel={<img src="/images/logoVitabi.png" className="w-16 h-10" />}
      backButtonHref="/" // Đường dẫn quay lại trang chủ hoặc trang trước
      showCloseButton={false}
    >
      <div className="flex flex-col items-center px-4">
        <div className="mb-6 mt-6" style={{ marginTop: "80px", marginBottom: "30px" }}>
          <img
            src="/images/logo.png"
            alt="avatar"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold" style={{ marginBottom: "15px" }}>
          {t("Login")}
        </h2>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            {/* Trường nhập email */}
            <div>
              <Input
                name="email"
                ref={emailRef} // Thêm ref để focus khi có lỗi
                type="email"
                placeholder={t("Enter email")}
                className="w-full h-12"
              />
            </div>

            {/* Trường nhập mật khẩu */}
            <div>
              <Input
                name="password"
                ref={passwordRef} // Thêm ref để focus khi có lỗi
                type="password"
                placeholder={t("Enter password")}
                className="w-full h-12"
              />
            </div>
          </div>

          {/* Nút đăng nhập, hiển thị trạng thái loading khi chờ phản hồi */}
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md h-12"
            disabled={loading} // Vô hiệu hóa nút trong khi đang loading
          >
            {loading ? (
              <div className="flex items-center justify-center">
                {/* Hiển thị hiệu ứng spinner khi đang xử lý */}
                <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                </svg>
                Logging in...
              </div>
            ) : (
              'Login'
            )}
          </Button>
        </form>

        {/* Đường dẫn đến trang đăng ký nếu chưa có tài khoản */}
        <p className="text-center mt-4">
          {t("Don't have an account?")}{" "}
          <Link
            href="/auth/signup"
            className="text-gray-500 underline hover:text-blue-600"
          >
            {t("Sign up")}
          </Link>
        </p>
      </div>
    </CardWrapper>
  );
};

export default LoginForm;
