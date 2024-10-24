"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper";

const UpdateEmail = () => {
  const [email, setEmail] = useState<string>("khoivl.net@gmail.com"); 

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value); 
  };

  const handleUpdate = () => {
    console.log("Updated Email:", email); 
  };

  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Update Personal Details</span>}
      backButtonLabel="←"
      backButtonHref="/users/personaldetail"
      showCloseButton={false}
    >
      <div className="px-6 py-6">
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-600" style={{marginTop: "20px"}}>
            Email Address:
          </label>
          <input
            id="email"
            type="email"
            value={email} 
            onChange={handleEmailChange} 
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-600"
            placeholder="Enter your email"
          />
        </div>

        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          style={{ marginBottom: "150px" }}
        >
          Update
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdateEmail;
