"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link"; // Import Link từ Next.js
import { CardWrapper } from "@/components/card-wrapper";
import i18n from "@/lib/i18n";
import "flag-icon-css/css/flag-icons.min.css";

const MyData = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState<string>("en");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <CardWrapper
      headerLabel={
        <div className="flex justify-between items-center">
          {/* Logo Vitabi */}
          <Link href="/"> 
            <img src="/images/logoVitabi.png" alt="Logo" className="w-16 h-10 cursor-pointer" />
          </Link>

          <div className="flex items-center space-x-4">
            
            <Link href="/users/usersaccount">
              <div className="relative cursor-pointer">
                <img
                  src="/images/profile-icon.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-700 p-1"
                />
              </div>
            </Link>

            
            <div className="relative">
              <button
                className="inline-flex items-center bg-gray-500 text-white border border-gray-300 px-2 py-1 rounded"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span
                  className={`flag-icon flag-icon-${
                    language === "en" ? "us" : language === "jp" ? "jp" : "vn"
                  } mr-2`}
                ></span>
                <span>
                  {language === "en" ? "EN" : language === "jp" ? "日本語" : "VN"}
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
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
                  <ul className="w-48">
                    <li
                      onClick={() => handleLanguageChange("en")}
                      className="cursor-pointer flex items-center px-6 py-2 hover:bg-gray-100"
                    >
                      <span className="flag-icon flag-icon-us mr-2"></span>
                      English
                    </li>
                    <li
                      onClick={() => handleLanguageChange("jp")}
                      className="cursor-pointer flex items-center px-6 py-2 hover:bg-gray-100"
                    >
                      <span className="flag-icon flag-icon-jp mr-2"></span>
                      日本語
                    </li>
                    <li
                      onClick={() => handleLanguageChange("vi")}
                      className="cursor-pointer flex items-center px-6 py-2 hover:bg-gray-100"
                    >
                      <span className="flag-icon flag-icon-vn mr-2"></span>
                      Tiếng Việt
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      }
      backButtonLabel={null}
      backButtonHref="/"
      showCloseButton={false}
    >
      <div className="px-6 py-6">
        <h1 className="text-2xl font-bold mb-2">{t("My data")}</h1>
        <div className="flex flex-col space-y-0">
      
        
            <div className="border bg-gray-500 cursor-pointer">
              <div className="px-6 py-2 font-semibold text-white text-base">
                {t("Profile")}
              </div>
              <div className="px-6 py-1 text-white" style={{ fontSize: "18px" }}>
                Khoi Lieu
              </div>
            </div>
          

          
          <Link href="/insurance">
            <div className="border py-2 cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="px-6 font-semibold text-base">{t("Insurance")}</div>
              <div className="px-6 text-base">Others</div>
            </div>
          </Link>

          
          <Link href="/medical-information">
            <div className="border py-2 cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="px-6 font-semibold text-base">
                {t("Medical Information")}
              </div>
              <div className="px-6 text-base">30 cm | 121.25 pound</div>
            </div>
          </Link>

          
          <Link href="/saved-hospitals">
            <div className="border py-2 cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="px-6 font-semibold text-base">
                {t("Saved Hospitals")}
              </div>
              <div className="px-6 text-base">3 {t("hospitals")}</div>
            </div>
          </Link>

         
          <Link href="/users/passwordsecurity">
            <div className="border py-2 cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="px-6 py-2 font-semibold text-base">
                {t("Password and Security")}
              </div>
            </div>
          </Link>

          
          <Link href="/mydata/settings">
            <div className="border py-2 cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="px-6 py-2 font-semibold text-base">
                {t("Setting")}
              </div>
            </div>
          </Link>

          
          <Link href="/admin">
            <div className="border py-2 cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="px-6 py-2 font-semibold text-base">
                {t("Vitabi Admin")}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default MyData;
