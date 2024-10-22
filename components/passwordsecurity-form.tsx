"use client";

import React from "react";
import { CardWrapper } from "@/components/card-wrapper";
import Link from "next/link"; 

export const PasswordSecurity = () => {
  return (
    <CardWrapper
      headerLabel={
        <span className="text-xl font-bold">Password & Security</span>
      }
      backButtonLabel="←"
      backButtonHref="/users/usersaccount"
      showCloseButton={false}
    >
      <div className="flex flex-col px-4" style={{ marginTop: "50px" }}>
        <div className="space-y-0 w-full">
      
          <div
            className="bg-white border border-gray-300 px-6"
            style={{
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
              borderBottom: "1px solid #d1d5db",
              paddingTop: "24px",
              paddingBottom: "24px"
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <strong>Change Password</strong>
                <span className="ml-1">
                  <Link href="/users/passwordsecurity/change_password">
                    <img
                      src="/images/edit-icon.png"
                      alt="Edit"
                      className="w-4 h-4 cursor-pointer"
                    />
                  </Link>
                </span>
              </div>
            </div>
          </div>

        
          <div
            className="bg-white border border-gray-300 px-6"
            style={{
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              paddingTop: "24px",
              paddingBottom: "24px"
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <strong>Security</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default PasswordSecurity;
