"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper";

export const UpdateWeight = () => {
  const [weight, setWeight] = useState("0.0");
  const [unit, setUnit] = useState("kg");

  const handleUpdate = () => {
    if (parseFloat(weight) <= 0) {
      return;
    }
    alert(`Weight updated to ${weight} ${unit}`);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
   
    if (parseFloat(value) < 0) {
      return;
    } else {
      setWeight(value);
    }
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newUnit = e.target.value;
    let newWeight = parseFloat(weight);

    if (newUnit === "pound" && unit === "kg") {
      newWeight = newWeight * 2.20462; 
    } else if (newUnit === "kg" && unit === "pound") {
      newWeight = newWeight / 2.20462; 
    }

    setUnit(newUnit);
    setWeight(newWeight.toFixed(2)); 
  };

  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Update Personal Details</span>}
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
      backButtonHref="/users/medicalinfo"
      showCloseButton={false}
    >
      <div className="flex flex-col px-4" style={{ marginTop: "50px" }}>
        <label className="font-semibold">Weight:</label>
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            className="flex-grow px-3 py-2 border-none outline-none"
            min="0"
            step="0.1" 
            style={{
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
              height: "100%",
            }}
          />
          <select
            value={unit}
            onChange={handleUnitChange}
            className="px-2 py-2 text-center text-gray-500 bg-white outline-none border border-gray-400 appearance-none"
            style={{
              height: "100%",
              margin: "0",
              width: "100px",
              background:
                'url("/images/dropdown-icon.png") no-repeat right 25px center',
              backgroundSize: "15px",
              paddingRight: "35px",
              cursor: "pointer",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4a4a4a"; 
              e.currentTarget.style.color = "#ffffff"; 
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white"; 
              e.currentTarget.style.color = "#4a4a4a";
            }}
          >
            <option className="" value="kg">kg</option>
            <option value="pound">pound</option>
          </select>
        </div>

        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-700"
          style={{
            transition: "background 0.3s ease",
            width: "85px", 
            padding: "7px 15px", 
          }}
        >
          Update
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdateWeight;
