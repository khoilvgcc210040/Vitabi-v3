"use client";

import React, { useState } from "react";
import Link from "next/link";
import "flag-icon-css/css/flag-icons.min.css";

interface Booking {
  id: number;
  date: string;
  country: string;
  hospitalName: string;
  reservedTime: string;
  status: "Approved" | "Rejected";
  imageUrl: string;
}

const bookingsData: Booking[] = [
  {
    id: 1,
    date: "2024/08/22",
    country: "Indonesia",
    hospitalName: "Abdi Waluyo Hospital",
    reservedTime: "2024/08/22 14:30~16:30",
    status: "Approved",
    imageUrl: "/images/indonesia_25.jpg",
  },
  {
    id: 2,
    date: "2024/08/20",
    country: "Vietnam",
    hospitalName: "DYM Medical Center Vietnam",
    reservedTime: "2024/08/20 11:23~13:23",
    status: "Approved",
    imageUrl: "/images/dym-medical-center.jpg",
  },
  {
    id: 3,
    date: "2024/08/07",
    country: "Vietnam",
    hospitalName: "Saigon Clinic",
    reservedTime: "2024/08/07 09:35~11:35",
    status: "Rejected",
    imageUrl: "/images/saigon-clinic.jpg",
  },
];

const Bookings = () => {
  const [language, setLanguage] = useState<string>("en");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="flex justify-center items-start bg-white min-h-screen">
      <div
        className="flex flex-col max-w-md w-full min-h-screen border border-gray-300 bg-white"
        style={{ border: "2px solid #d4d4d4" }}
      >
        {/* Header */}
        <div
          className="flex justify-between items-center border-b border-gray-400 p-4 shadow-md"
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
                style={{ fontSize: "18.25px" }}
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

        {/* Content */}
        <div
          className="flex-grow overflow-y-auto p-6  mx-auto max-w-sm"
          style={{
            maxHeight: "calc(100vh - 160px)",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <h1 className="text-2xl font-bold mb-4 mt-4">Bookings</h1>
          {bookingsData.map((booking, index) => (
            <div key={index} className="mb-4">
              {index === 0 ||
              bookingsData[index - 1].country !== booking.country ? (
                <h2 className="text-lg font-bold">{booking.country}</h2>
              ) : null}
              <p className="text-base font-semibold mb-2">{booking.date}</p>
              <Link href="/bookings/booking-details">
                <div
                  className="flex items-start space-x-2 border border-gray-300 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                >
                  <img
                    src={booking.imageUrl}
                    alt={booking.hospitalName}
                    className="w-20"
                    style={{ height: "130px" }}
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm mt-2">
                      {booking.hospitalName}
                    </h3>
                    <hr className="border-gray-300 mt-2 mb-1" />
                    <p className="text-sm">
                      <strong>Name:</strong> Khoi Lieu
                    </p>
                    <p className="text-sm">
                      <strong>Reserved Time:</strong> {booking.reservedTime}
                    </p>
                    <p className="text-sm">
                      <strong>Status:</strong>{" "}
                      <span
                        className={`${
                          booking.status === "Approved"
                            ? "bg-green-700 text-white"
                            : "bg-red-600 text-white"
                        } px-2 py-0.5 rounded-full text-xs font-semibold`}
                      >
                        {booking.status}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
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

export default Bookings;
