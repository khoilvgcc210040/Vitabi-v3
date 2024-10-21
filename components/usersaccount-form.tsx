"use client";

import React from "react";
import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AccountPage = () => {
  return (
    <CardWrapper
      headerLabel={
        <span className="text-xl font-bold" style={{ marginLeft: "-20px" }}>
          Account
        </span>
      }
      backButtonLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      }
      backButtonHref="/"
      showCloseButton={false}
    >
      <div className="flex flex-col items-center px-4">
        <div
          className="w-24 h-24 rounded-full border-2 border-gray-700 p-4"
          style={{ marginTop: "40px" }}
        >
          <img
            src="/images/profile-icon.png"
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Khoi Lieu</h1>

      
        <div className="w-full space-y-0">
     
          <Link
            href="/users/personaldetail"
            className="block bg-white text-black font-semibold border border-gray-300 rounded-t-md px-5 py-4 text-base hover:scale-95 transform transition-transform duration-200"
            style={{ marginBottom: "0", borderBottom: "1px solid #d1d5db" }}
          >
            Personal Details
          </Link>

          
          <Link
            href="/users/medicalinfo"
            className="block bg-white text-black font-semibold border border-r border-gray-300 rounded-none px-5 py-4 text-base hover:scale-95 transform transition-transform duration-200"
            style={{ marginBottom: "0", borderBottom: "1px solid #d1d5db" }}
          >
            Medical Information
          </Link>

     
          <Link
            href="/users/passwordsecurity"
            className="block bg-white text-black font-semibold border border-r border-gray-300 rounded-none px-5 py-4 text-base hover:scale-95 transform transition-transform duration-200"
            style={{ marginBottom: "0", borderBottom: "1px solid #d1d5db" }}
          >
            Password and Security
          </Link>

         
          <Link
            href="/account/vitabi-admin"
            className="block bg-white text-black font-semibold border border-gray-300 rounded-b-md px-5 py-4 text-base hover:scale-95 transform transition-transform duration-200"
            style={{ marginBottom: "0" }}
          >
            Vitabi Admin
          </Link>
        </div>

        <div className="mt-4 w-full">
          <Button
            className="w-full border-2 border-black text-gray-500 bg-white py-2 rounded-md transform transition-transform duration-200 hover:bg-white hover:scale-95"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default AccountPage;
