"use client";

import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { CardWrapper } from "@/components/card-wrapper";

const UpdatePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
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
          <label htmlFor="phone" className="block mb-1 font-medium text-gray-600" style={{marginTop: "20px"}}>
            Phone Number:
          </label>

          <PhoneInput
            country={'vn'}  
            value={phoneNumber}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
            containerClass="w-full" 
            inputClass="w-full border border-gray-300 px-3 py-2 rounded-md" 
          />
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" style={{ marginBottom: "150px" }}>
          Update
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdatePhoneNumber;
