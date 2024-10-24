"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CardWrapper } from "@/components/card-wrapper"; 


const UpdateLanguage = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold" style={{ marginLeft: "-20px" }}>
      Update Personal Details
    </span>}
      backButtonLabel="←"
      backButtonHref="/users/personaldetail"
      showCloseButton={false}
    >
      <div className="px-6 py-6">
        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-2" style={{ marginTop: "20px" }}>
            Language you speak:
          </label>
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="text-gray-600 block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
            >
              <option>English</option>
              <option>Vietnamese</option>
              <option>Japanese</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
            </div>
          </div>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {t("Update")}
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdateLanguage;
