"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { CardWrapper } from "@/components/card-wrapper";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Ensure this style is loaded

const PersonalInformationForm = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("string"); 
  const [gender, setGender] = useState("");
  const [firstname, setFirstname] = useState("Khoi"); 
  const [surname, setSurname] = useState("Lieu"); 
  const [dateOfBirth, setDateOfBirth] = useState("2024-04-16"); 

  const handleUpdate = () => {
    console.log("Updated", { firstname, surname, phone, gender, dateOfBirth });
  };

  return (
    <CardWrapper
      headerLabel={
        <div className="flex justify-center items-center w-full">
          <Link href="/hospitalinfo">
            <span className="text-lg">←</span>
          </Link>
          <h1 className="text-center flex-grow font-semibold text-lg">
            {t("Personal Information")} (1/3)
          </h1>
        </div>
      }
      backButtonLabel={null}
      backButtonHref="/"
      showCloseButton={false}
      showFooter={false} // This disables the default footer
    >
      <div className="w-full max-w-md p-6 space-y-4 flex flex-col h-full">
        <div className="flex-grow space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">
                {t("Firstname")}
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium">
                {t("Surname")}
              </label>
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">{t("Gender")}</label>
            <select
              className="w-full border border-gray-300 p-3 rounded appearance-none"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>
                {t("Select Gender")}
              </option>
              <option value="Male">{t("Male")}</option>
              <option value="Female">{t("Female")}</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">
              {t("Date of Birth")}
            </label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">{t("Email")}</label>
            <input
              type="email"
              value="khoivl.net@gmail.com"
              readOnly
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              {t("Phone Number")}
            </label>
            <PhoneInput
              country={"vn"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              enableSearch
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              containerClass="w-full border border-gray-300 rounded"
              inputClass="w-full p-6 pl-16 border-none rounded" 
              buttonStyle={{
                borderRadius: "5px 0 0 5px",
                borderColor: "#d1d5db",
                padding: "0 10px",
                display: "flex",
                alignItems: "center",
              }}
              inputStyle={{
                borderRadius: "0 5px 5px 0",
                borderColor: "#d1d5db",
                width: "100%",
                paddingLeft: "70px",
              }}
            />
          </div>
        </div>

        <div
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4  bg-white"
          style={{
            width: "100%",
            maxWidth: "22rem",
            
          }}
        >
          <Link href="/book3">
          <button
            onClick={handleUpdate}
            className="bg-black text-white w-full py-3 rounded text-xl font-semibold"
          >
            {t("Next")}
          </button>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PersonalInformationForm;
