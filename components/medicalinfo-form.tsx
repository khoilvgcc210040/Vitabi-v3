"use client";

import React from "react";
import { CardWrapper } from "@/components/card-wrapper";
import Link from "next/link";

export const MedicalInfo = () => {
  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Medical Information</span>}
      backButtonLabel="←"
      backButtonHref="/users/usersaccount"
      showCloseButton={false}
    >
      <div className="flex flex-col px-4" style={{ marginTop: "50px" }}>
        <div className="space-y-0 w-full">
          {/* Height */}
          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              borderBottom: "1px solid #d1d5db",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <strong>Height</strong>
                <Link href="/users/medicalinfo/update_height">
                  <img
                    src="/images/edit-icon.png"
                    alt="Edit"
                    className="w-4 h-4 inline"
                  />
                </Link>
              </div>
            </div>
            <p className="text-gray-500 mt-1">30 cm</p>
          </div>

          {/* Weight */}
          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <strong>Weight</strong>
                <Link href="/users/medicalinfo/update_weight">
                  <img
                    src="/images/edit-icon.png"
                    alt="Edit"
                    className="w-4 h-4 inline"
                  />
                </Link>
              </div>
            </div>
            <p className="text-gray-500 mt-1">121.25 pound</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default MedicalInfo;
