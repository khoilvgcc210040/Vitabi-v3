"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper"; 

const UpdateGender = () => {
  const [gender, setGender] = useState<string>("Male");

  const handleUpdate = () => {
    
    console.log("Updated gender:", gender);
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
          <label htmlFor="gender" className="block mb-1 font-medium text-gray-600">
            Gender:
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md appearance-none text-gray-600"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

       
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdateGender;
