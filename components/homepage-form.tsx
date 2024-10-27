"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import i18n from "@/lib/i18n";
import "flag-icon-css/css/flag-icons.min.css";

const Home = () => {
  const { t } = useTranslation();
  const [country, setCountry] = useState<string>("Select Country");
  const [insurance, setInsurance] = useState<string>("All Insurance");
  const [language, setLanguage] = useState<string>("en");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInsurance(e.target.value);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-center items-start bg-white min-h-screen">
      <div
        className="flex flex-col max-w-md w-full min-h-screen border border-gray-300 bg-white"
        style={{ border: "2px solid #d4d4d4" }}
      >
        <div
          className="flex justify-between items-center border-b border-gray-400 p-4"
          style={{ borderBottom: "2px solid #d4d4d4" }}
        >
          <Link href="/">
            <img
              src="/images/logoVitabi.png"
              alt="Logo"
              className="w-16 h-10 cursor-pointer"
            />
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
                className="inline-flex items-center bg-gray-500 font-bold text-white border border-gray-300 px-2 py-1 rounded"
                style={{
                  fontSize: "18.25px",
                }}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <span
                  className={`flag-icon flag-icon-${
                    language === "en" ? "us" : language === "jp" ? "jp" : "vn"
                  } mr-2`}
                ></span>
                <span>
                  {language === "en" ? "EN" : language === "jp" ? "JP" : "VN"}
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
                      onClick={() => changeLanguage("en")}
                      className="cursor-pointer flex items-center px-6 py-2 hover:bg-gray-100"
                    >
                      <span className="flag-icon flag-icon-us mr-2"></span>
                      English
                    </li>
                    <li
                      onClick={() => changeLanguage("jp")}
                      className="cursor-pointer flex items-center px-6 py-2 hover:bg-gray-100"
                    >
                      <span className="flag-icon flag-icon-jp mr-2"></span>
                      日本語
                    </li>
                    <li
                      onClick={() => changeLanguage("vi")}
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

        <div
          className="px-6 py-8 flex-grow flex flex-col items-center"
          style={{
            backgroundImage: 'url("/images/background.png")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-2xl font-bold text-white mb-6"
            style={{
              fontSize: "32px",
              fontWeight: 900,
              color: "#FFFFFF",
              textShadow: "1px 1px 0 #000000",
              marginTop: "20px",
              paddingRight: "50px",
            }}
          >
            {t("Find Care")}
            <br /> {t("Wherever You Are")}
          </h1>

          <div
            className="bg-white rounded-lg shadow-lg p-4 w-full max-w-xs text-center"
            style={{ marginTop: "35px" }}
          >
            <div className="mb-4">
              <select
                id="country"
                value={country}
                onChange={handleCountryChange}
                className="w-full border border-gray-300 px-3 py-4 text-gray-600"
              >
                <option value="Select Country">{t("Select Country")}</option>
                <option value="All Country">{t("All Country")}</option>
                <option value="Indonesia">{t("Indonesia")}</option>
                <option value="India">{t("India")}</option>
                <option value="Cambodia">{t("Cambodia")}</option>
                <option value="Korea">{t("Korea")}</option>
                <option value="Laos">{t("Laos")}</option>
                <option value="Myanmar">{t("Myanmar")}</option>
                <option value="Malaysia">{t("Malaysia")}</option>
                <option value="Philippines">{t("Philippines")}</option>
                <option value="Singapore">{t("Singapore")}</option>
                <option value="Thailand">{t("Thailand")}</option>
                <option value="Taiwan">{t("Taiwan")}</option>
                <option value="United States">{t("United States")}</option>
                <option value="Vietnam">{t("Vietnam")}</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                id="insurance"
                value={insurance}
                onChange={handleInsuranceChange}
                className="w-full border border-gray-300 px-3 py-4 text-gray-600"
              >
                <option value="All Insurance">{t("All Insurance")}</option>
                <option value="Tokyo Marine">{t("Tokyo Marine")}</option>
                <option value="Aioi Nissei">{t("Aioi Nissei")}</option>
                <option value="JI">{t("JI")}</option>
                <option value="Mitsui-Sumitomo">{t("Mitsui-Sumitomo")}</option>
                <option value="Sompo Japan">{t("Sompo Japan")}</option>
                <option value="AIG">{t("AIG")}</option>
                <option value="HS">{t("HS")}</option>
              </select>
            </div>

            <Link href="/findhospital">
              <button
                className="bg-blue-700 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textShadow: "1px 1px 0 #000000",
                }}
              >
                {t("Find a hospital")}
              </button>
            </Link>
          </div>
        </div>

        <footer
          className="flex justify-around w-full p-4 mt-auto"
          style={{ marginTop: "auto", borderTop: "2px solid #d4d4d4" }}
        >
          <Link
            href="/homepage"
            className="nav-link flex flex-col items-center"
            style={{ width: "70px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <span className="text-sm">Home</span>
          </Link>

          <Link
            href="/bookings"
            className="nav-link flex flex-col items-center"
            style={{ width: "70px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar-event"
              viewBox="0 0 16 16"
            >
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <span className="text-sm">Bookings</span>
          </Link>

          <Link
            href="/mydata"
            className="nav-link flex flex-col items-center"
            style={{ width: "70px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-card-list"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
              <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
            </svg>
            <span className="text-sm">My Data</span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Home;
