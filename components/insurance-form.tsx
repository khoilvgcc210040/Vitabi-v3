"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CardWrapper } from "@/components/card-wrapper";

const Insurance = () => {
  const { t } = useTranslation();
  const [selectedCoverage, setSelectedCoverage] = useState<string>("Others");


  const coverageOptions = [
    "Others",
    "Tokio Marine",
    "MS&AD",
    "Sompo Japan",
    "AIG Insurance",
    "AIU Insurance",
    "HS Insurance",
    "No coverage",
  ];

  const handleCoverageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoverage(e.target.value);
  };

  return (
    <CardWrapper
      headerLabel={ <span className="text-xl font-bold" style={{ marginLeft: "-20px" }}>
      Update Personal Details
    </span>
    }
      backButtonLabel="←"
      backButtonHref="/mydata"
      showCloseButton={false}
    >
      <div className="px-6 py-6">
       
        <div className="mb-4">
          <label htmlFor="coverage" className="block mb-1 font-medium text-gray-600">
            {t("Coverage")}
          </label>
          <select
            id="coverage"
            value={selectedCoverage}
            onChange={handleCoverageChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md appearance-none text-gray-600"
          >
            {coverageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

    
        <div className="mb-4">
          <label htmlFor="insuranceCompany" className="block mb-1 font-medium text-gray-600">
            {t("Insurance Company:")}
          </label>
          <input
            id="insuranceCompany"
            type="text"
            defaultValue="KHOI"
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-600"
          />
        </div>

    
        <div className="mb-4">
          <label htmlFor="policyNumber" className="block mb-1 font-medium text-gray-600">
            {t("Policy Number:")}
          </label>
          <input
            id="policyNumber"
            type="text"
            defaultValue="A12345"
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-600"
          />
        </div>

      
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {t("Update")}
        </button>
      </div>
    </CardWrapper>
  );
};

export default Insurance;
