"use client";

import React from "react";
import Link from "next/link"; 
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

          <Link href="personaldetail/update_name">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
              style={{
                borderBottom: "1px solid #d1d5db",
              }}
            >
              <strong className="text-sm">Name</strong>
              <p className="text-gray-500 text-sm">Khoi Lieu</p>
            </div>
          </Link>

          <Link href="personaldetail/update_gender">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
              style={{ borderBottom: "1px solid #d1d5db" }}
            >
              <strong className="text-sm">Gender</strong>
              <p className="text-gray-500 text-sm">Male</p>
            </div>
          </Link>

          <Link href="personaldetail/update_dob">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
              style={{ borderBottom: "1px solid #d1d5db" }}
            >
              <strong className="text-sm">Date of Birth</strong>
              <p className="text-gray-500 text-sm">2024/04/16</p>
            </div>
          </Link>

          <Link href="personaldetail/update_email">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
              style={{ borderBottom: "1px solid #d1d5db" }}
            >
              <strong className="text-sm">Email</strong>
              <p className="text-gray-500 text-sm">khoivl.net@gmail.com</p>
            </div>
          </Link>

          <Link href="personaldetail/update_phone">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
              style={{ borderBottom: "1px solid #d1d5db" }}
            >
              <strong className="text-sm">Phone Number</strong>
              <p className="text-gray-500 text-sm">+84-814744236</p>
            </div>
          </Link>

          <Link href="personaldetail/update_nationality">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
              style={{ borderBottom: "1px solid #d1d5db" }}
            >
              <strong className="text-sm">Nationality</strong>
              <p className="text-gray-500 text-sm">Yemen</p>
            </div>
          </Link>

          <Link href="personaldetail/update_language">
            <div
              className="bg-white border border-gray-300 px-3 py-2 cursor-pointer"
            >
              <strong className="text-sm">
                Language You Prefer To Speak At The Hospital
              </strong>
              <p className="text-gray-500 text-sm">Not selected</p>
            </div>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PersonalDetails;
