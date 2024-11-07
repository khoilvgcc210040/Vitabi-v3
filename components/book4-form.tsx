"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { CardWrapper } from "@/components/card-wrapper";

const InsuranceInformationForm = () => {
  const { t } = useTranslation();
  const [coverage, setCoverage] = useState("Others");
  const [insuranceCompany, setInsuranceCompany] = useState("KHOI");
  const [policyNumber, setPolicyNumber] = useState("A12345");

  const handleUpdate = () => {
    console.log("Form Data", {
      coverage,
      insuranceCompany,
      policyNumber,
    });
  };

  return (
    <CardWrapper
      headerLabel={
        <div className="flex justify-center items-center w-full">
          <Link href="/book3">
            <span className="text-lg">←</span>
          </Link>
          <h1 className="text-center flex-grow font-semibold text-lg">
            {t("Insurance Information")} (3/3)
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
      <div className="w-full max-w-md p-6 space-y-4 mt-6">
        {/* Coverage */}
        <div>
          <label className="block text-base font-medium mb-2">{t("Coverage")}</label>
          <input
            type="text"
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-2"
          />
        </div>

        {/* Insurance Company */}
        <div>
          <label className="block text-base font-medium mb-2">{t("Insurance Company")}</label>
          <input
            type="text"
            value={insuranceCompany}
            onChange={(e) => setInsuranceCompany(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-2"
          />
        </div>

        {/* Policy Number */}
        <div>
          <label className="block text-base  font-medium mb-2">{t("Policy Number")}</label>
          <input
            type="text"
            value={policyNumber}
            onChange={(e) => setPolicyNumber(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-2"
          />
        </div>

        <div
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4  bg-white"
          style={{
            width: "100%",
            maxWidth: "22rem",
            
          }}
        >
          <Link href="/book5">
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

export default InsuranceInformationForm;
