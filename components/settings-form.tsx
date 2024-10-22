"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { CardWrapper } from "@/components/card-wrapper"; 
import Link from "next/link";

const SettingPage = () => {
  const { t } = useTranslation();

  return (
    <CardWrapper
      headerLabel={
        <span className="text-xl font-bold" style={{ marginLeft: "-20px" }}>
        Setting
      </span>
      }
      backButtonLabel="←"
      backButtonHref="/mydata" 
      showCloseButton={false}
    >
      <div className="px-6 py-6" style={{ marginTop: "20px" }}>
        
        <div className="border rounded-t-md">
          <div className="flex justify-between items-center px-4 py-2">
            <span className="font-semibold flex items-center">
              {t("Display Language")}
              <Link href="/mydata/settings/updatesetting"> 
              <img
                src="/images/edit-icon.png"
                alt="Edit"
                className="w-5 h-5 ml-2"
              />
              </Link>
            </span>
           
          </div>
          <div className="px-4 ">English</div>
        </div>

        {/* Currency */}
        <div className="border">
          <div className="flex justify-between items-center px-4 py-2">
            <span className="font-semibold flex items-center">
              {t("Currency")}
              <Link href="/"> 
              <img
                src="/images/edit-icon.png"
                alt="Edit"
                className="w-5 h-5 ml-2"
              />
              </Link>
            </span>
           
          </div>
          <div className="px-4">Japanese Yen (¥)</div>
        </div>

       
        <div className="border rounded-b-md ">
          <div className="flex justify-between items-center px-4 py-2">
            <span className="font-semibold flex items-center">
              {t("Units")}
              <Link href="/"> 
              <img
                src="/images/edit-icon.png"
                alt="Edit"
                className="w-5 h-5 ml-2"
              />
              </Link>
            </span>
          </div>
          <div className="px-4">Metrics (km)</div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default SettingPage;
