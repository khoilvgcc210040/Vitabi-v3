"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/card-wrapper";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n"; // Import file i18n
import "flag-icon-css/css/flag-icons.min.css"; // Import flag-icon-css

export const LoginForm = () => {
  const [error, setError] = useState<string>(""); // State để lưu thông báo lỗi
  const { t } = useTranslation();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const emailInput = emailRef.current?.value;
    const passwordInput = passwordRef.current?.value;
  
    // Kiểm tra nếu email hoặc mật khẩu bị bỏ trống
    if (!emailInput || !passwordInput) {
      setError(t("Email or password does not valid")); // Hiển thị lỗi qua hệ thống dịch ngôn ngữ
  
      // Focus vào trường bị bỏ trống
      if (!emailInput) {
        emailRef.current?.focus();
      } else if (!passwordInput) {
        passwordRef.current?.focus();
      }
    } else if (!emailInput.includes("@")) {
      setError(t("Enter a valid email"));
      emailRef.current?.focus(); // Focus vào trường email khi lỗi định dạng
    } else if (passwordInput.length < 6) {
      setError(t("Password must be at least 6 characters"));
      passwordRef.current?.focus(); // Focus vào trường mật khẩu khi ngắn quá
    } else {
      setError(""); // Xóa lỗi nếu thông tin hợp lệ
      // Xử lý đăng nhập tại đây
      console.log("Login successful!");
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
      backButtonHref="/"
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
        <h2 className="text-2xl font-semibold" style={{ marginBottom: "15px" }}>{t("Login")}</h2> 
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Hiển thị lỗi */}

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <Input
                name="email"
                ref={emailRef} // Thêm ref để focus khi có lỗi
                type="email"
                placeholder={t("Enter email")}
                className="w-full h-12"
                
              />
            </div>

            {/* Password */}
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

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md h-12"
          >
            {t("Login")}
          </Button>
        </form>

        <p className="text-center mt-4">
          {t("Don&apos;t have an account?")}{" "}
          <Link
            href="/auth/signup"
            className="text-gray-500 underline hover:text-blue-600"
          >
            {t("Register")}
          </Link>
        </p>
      </div>
    </CardWrapper>
  );
};

export default LoginForm;
