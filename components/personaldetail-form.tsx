"use client";

import React from "react";
import { CardWrapper } from "@/components/card-wrapper";

export const PersonalDetails = () => {
  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Personal Details</span>}
      backButtonLabel="←"
      backButtonHref="/users/usersaccount"
      showCloseButton={false}
    >
      <div className="flex flex-col px-4">
        <div className="space-y-0" style={{ marginTop: "50px" }}>
          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              borderBottom: "1px solid #d1d5db",
            }}
          >
            <strong className="text-sm">Name</strong>
            <p className="text-gray-500 text-sm">Khoi Lieu</p>
          </div>

          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{ borderBottom: "1px solid #d1d5db" }}
          >
            <strong className="text-sm">Gender</strong>
            <p className="text-gray-500 text-sm">Male</p>
          </div>

          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{ borderBottom: "1px solid #d1d5db" }}
          >
            <strong className="text-sm">Date of Birth</strong>
            <p className="text-gray-500 text-sm">2024/04/16</p>
          </div>

          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{ borderBottom: "1px solid #d1d5db" }}
          >
            <strong className="text-sm">Email</strong>
            <p className="text-gray-500 text-sm">khoivl.net@gmail.com</p>
          </div>

          <div
            className="bg-white border  border-gray-300 px-3 py-2"
            style={{ borderBottom: "1px solid #d1d5db" }}
          >
            <strong className="text-sm">Phone Number</strong>
            <p className="text-gray-500 text-sm">+84-814744236</p>
          </div>

          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{ borderBottom: "1px solid #d1d5db" }}
          >
            <strong className="text-sm">Nationality</strong>
            <p className="text-gray-500 text-sm">Yemen</p>
          </div>

          <div
            className="bg-white border border-gray-300 px-3 py-2"
            style={{
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <strong className="text-sm">
              Language You Prefer To Speak At The Hospital
            </strong>
            <p className="text-gray-500 text-sm">Not selected</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PersonalDetails;
