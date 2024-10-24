"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper";
import { CountryDropdown } from "react-country-region-selector";

const UpdateNationality = () => {
  const [nationality, setNationality] = useState<string>("Yemen");

  const handleChange = (val: string) => {
    setNationality(val);
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
          <label htmlFor="nationality" className="block mb-1 font-medium text-gray-600" style={{marginTop: "20px"}}>
            Nationality:
          </label>
          <div className="country-selector text-gray-600">
            <CountryDropdown
              value={nationality}
              onChange={(val) => handleChange(val)}
            />
          </div>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Update
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdateNationality;
