"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { CardWrapper } from "@/components/card-wrapper";

const FinalConfirmation = () => {
  const { t } = useTranslation();

  const personalInfo = {
    name: "Khoi Lieu",
    gender: "Male",
    dob: "2024-04-16",
    email: "khoivl.net@gmail.com",
    phone: "+84-814744236",
  };

  const appointmentInfo = {
    hospital: "Family Medical Practice - International Clinic",
    firstPreferredTime: "2024-11-06, 16:09~18:09",
    secondPreferredTime: "2024-11-21 from 18:23 to 23:19",
    symptoms: "fx",
    duration: "sdg",
  };

  const insuranceInfo = {
    insuranceType: "Others - KHOI",
    policyNumber: "A12345",
  };

  return (
    <CardWrapper
      headerLabel={
        <div className="flex justify-center items-center w-full">
          <Link href="/book3">
            <span className="text-lg">←</span>
          </Link>
          <h1 className="text-center flex-grow font-semibold text-lg">
            {t("Final Confirmation")}
          </h1>
          <Link
            href="/hospitalinfo"
            onClick={(e) => {
              e.preventDefault();
              if (window.confirm("Are you sure you want to cancel?")) {
                window.location.href = "/hospitalinfo";
              }
            }}
            className="text-xl"
          >
            ✖
          </Link>
        </div>
      }
      backButtonHref="/"
      showCloseButton={false}
      showFooter={false}
    >
      <div className="w-full max-w-md p-8 space-y-6 mt-6">
        {/* Personal Information Card */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font text-xl text-center">
              {t("Personal Information (1/3)")}
            </h2>
            <span className="relative ml-2 w-6 h-6">
              <Link href="/book1">
                <img
                  src="/images/edit-icon-blue.png"
                  alt="Edit"
                  className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 hover:opacity-0"
                />

                <img
                  src="/images/edit-icon-hover.png"
                  alt="Edit Hover"
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 hover:opacity-100"
                />
              </Link>
            </span>
          </div>
          <hr className="mb-2" />
          <p className="mb-2">
            <strong>{t("Name")}:</strong> {personalInfo.name}
          </p>
          <p className="mb-2">
            <strong>{t("Gender")}:</strong> {personalInfo.gender}
          </p>
          <p className="mb-2">
            <strong>{t("Date of Birth")}:</strong> {personalInfo.dob}
          </p>
          <p className="mb-2">
            <strong>{t("Email Address")}:</strong> {personalInfo.email}
          </p>
          <p className="mb-2">
            <strong>{t("Phone Number")}:</strong> {personalInfo.phone}
          </p>
        </div>

        {/* Appointment Information Card */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font text-xl text-center">
              {t("Appointment Information (2/3)")}
            </h2>
            <span className="relative ml-2 w-6 h-6">
              <Link href="/book3">
                <img
                  src="/images/edit-icon-blue.png"
                  alt="Edit"
                  className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 hover:opacity-0"
                />

                <img
                  src="/images/edit-icon-hover.png"
                  alt="Edit Hover"
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 hover:opacity-100"
                />
              </Link>
            </span>
          </div>
          <hr className="mb-2" />
          <p className="mb-2">
            <strong>{t("Selected Hospital")}:</strong>{" "}
            {appointmentInfo.hospital}
          </p>
          <p className="mb-2">
            <strong>{t("1st Preferred Date/Times")}:</strong>{" "}
            {appointmentInfo.firstPreferredTime}
          </p>
          <p className="mb-2">
            <strong>{t("2nd Preferred Date/Times")}:</strong>{" "}
            {appointmentInfo.secondPreferredTime}
          </p>
          <p className="mb-2">
            <strong>{t("Symptom")}:</strong> {appointmentInfo.symptoms}
          </p>
          <p className="mb-2">
            <strong>{t("Duration")}:</strong> {appointmentInfo.duration}
          </p>
        </div>

        {/* Insurance Information Card */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font text-xl text-center">
              {t("Insurance Information (3/3)")}
            </h2>
            <span className="relative ml-2 w-6 h-6">
              <Link href="/book4">
                <img
                  src="/images/edit-icon-blue.png"
                  alt="Edit"
                  className="absolute top-0 left-0 w-6 h-6 transition-opacity duration-300 hover:opacity-0"
                />

                <img
                  src="/images/edit-icon-hover.png"
                  alt="Edit Hover"
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 transition-opacity duration-300 hover:opacity-100"
                />
              </Link>
            </span>
          </div>
          <hr className="mb-2" />
          <p className="mb-2">
            <strong>{t("Insurance")}:</strong> {insuranceInfo.insuranceType}
          </p>
          <p className="mb-2">
            <strong>{t("Policy Number")}:</strong> {insuranceInfo.policyNumber}
          </p>
        </div>
      </div>

      {/* Confirm Button */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4  bg-white"
        style={{
          width: "100%",
          maxWidth: "22rem",
        }}
      >
        <Link href="/book5">
          <button
            onClick={() => console.log("Confirmed")}
            className="bg-black text-white w-full py-3 rounded font-semibold"
          >
            {t("Confirm")}
          </button>
        </Link>
      </div>
    </CardWrapper>
  );
};

export default FinalConfirmation;
