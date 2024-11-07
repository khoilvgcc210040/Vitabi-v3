"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "@/components/card-wrapper";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n"; 
import "flag-icon-css/css/flag-icons.min.css"; 

export const LoginForm = () => {
  const [error, setError] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(false); 
  const { t } = useTranslation();
  const router = useRouter(); 

  const [language, setLanguage] = useState<string>("en");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

 
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };


  useEffect(() => {
    if (error) {
      setError(t("Email or password does not valid"));
    }
  }, [language, error, t]); 

 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const emailInput = emailRef.current?.value;
    const passwordInput = passwordRef.current?.value;

   
    if (!emailInput || !passwordInput) {
      setError(t("Email or password does not valid")); 
      if (!emailInput) emailRef.current?.focus(); 
      else passwordRef.current?.focus();
      return;
    }

   
    if (!emailInput.includes("@")) {
      setError(t("Enter a valid email"));
      emailRef.current?.focus(); 
      return;
    }

   
    if (passwordInput.length < 6) {
      setError(t("Password must be at least 6 characters"));
      passwordRef.current?.focus(); 
      return;
    }

    setError(""); 
    setLoading(true); 

    try {
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
     
        setError("");
        router.push("/dashboard"); 
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(t("An unexpected error occurred"));
    } finally {
      setLoading(false); 
    }
  };

  return (
    <CardWrapper
      headerLabel={
        <div className="relative inline-block">
          <button
            className="inline-flex items-center bg-white border border-gray-300 rounded px-2 py-1"
            style={{ marginLeft: "200px" }}
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

        <h2 className="text-2xl font-semibold" style={{ marginBottom: "15px" }}>
          {t("Login")}
        </h2>

        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            
            <div>
              <Input
                name="email"
                ref={emailRef} 
                type="email"
                placeholder={t("Enter email")}
                className="w-full h-12"
              />
            </div>

            
            <div>
              <Input
                name="password"
                ref={passwordRef} 
                type="password"
                placeholder={t("Enter password")}
                className="w-full h-12"
              />
            </div>
          </div>

          
          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md h-12"
            disabled={loading} 
          >
            {loading ? (
              <div className="flex items-center justify-center">
               
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
