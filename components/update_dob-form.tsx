"use client";

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CardWrapper } from "@/components/card-wrapper";

const UpdateDateOfBirth = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("mm/dd/yyyy");

  // Load giá trị từ localStorage khi trang được load
  useEffect(() => {
    const savedDate = localStorage.getItem("selectedDate");
    if (savedDate) {
      const date = new Date(savedDate);
      setSelectedDate(date);
      setInputValue(date.toLocaleDateString("en-US"));
    }
  }, []);

  
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toLocaleDateString("en-US");
      setInputValue(formattedDate);
      localStorage.setItem("selectedDate", date.toISOString()); 
    } else {
      setInputValue("mm/dd/yyyy");
      localStorage.removeItem("selectedDate");
    }
    setCalendarOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); 
    if (value.length <= 2) {
      setInputValue(value); 
    } else if (value.length <= 4) {
      setInputValue(`${value.slice(0, 2)}/${value.slice(2)}`); 
    } else if (value.length <= 8) {
      setInputValue(`${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`); 
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "mm/dd/yyyy") {
      setInputValue("");
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setInputValue("mm/dd/yyyy");
    }
  };

  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Update Personal Details</span>}
      backButtonLabel="←"
      backButtonHref="/users/personaldetail"
      showCloseButton={false}
    >
      <div className="px-6 py-6">
        <div className="mb-4 relative">
          <label htmlFor="dob" className="block mb-1 font-medium text-gray-600" style={{ marginTop :"20px"}}>
            Date of Birth:
          </label>

          <div className="flex items-center border border-gray-300 rounded-md text-gray-600">
            <input
              id="dob"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full px-3 py-2 rounded-l-md focus:outline-none"
              placeholder="MM/DD/YYYY"
              maxLength={10} 
            />
            <span
              className="px-3 py-2 bg-white cursor-pointer"
              onClick={() => setCalendarOpen(!isCalendarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 1 0V1zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm11 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V6zm-2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V6zm-2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V6z" />
              </svg>
            </span>
          </div>

          
          {isCalendarOpen && (
            <div className="absolute top-full mt-2 z-10">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                todayButton="Today"
                className="border border-gray-300 rounded-md px-3 py-2 text-gray-600"
                inline
              />
            </div>
          )}
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" style={{ marginBottom: "167px" }}>
          Update
        </button>
      </div>
    </CardWrapper>
  );
};

export default UpdateDateOfBirth;
