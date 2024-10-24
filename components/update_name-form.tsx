"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper"; 

const UpdateName = () => {
  const [firstname, setFirstname] = useState("Khoi");
  const [surname, setSurname] = useState("Lieu");

  const handleUpdate = () => {
    
    console.log("Updated", { firstname, surname });
  };

  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Update Personal Details</span>}
      backButtonLabel="←"
      backButtonHref="/users/personaldetail" 
      showCloseButton={false}
    >
      <div className="px-6 py-6" style={{ marginTop: "20px" }}>
        
        <div className="mb-4">
          <label htmlFor="firstname" className="block mb-1 font-medium text-gray-600">
            Firstname:
          </label>
          <input
            id="firstname"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-600"
          />
        </div>

      
        <div className="mb-4">
          <label htmlFor="surname" className="block mb-1 font-medium text-gray-600">
            Surname:
          </label>
          <input
            id="surname"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-600"
          />
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

export default UpdateName;
