"use client";
import React, { useState } from "react";
import { CardWrapper } from "./card-wrapper";

interface HospitalCardProps {
  id: number;
  rating: number;
  name: string;
  country: string;
  status: string;
  openHoursOptions: string[];
  directBillingAvailable: boolean;
  language: string;
  imageUrl: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  rating,
  name,
  country,
  status,
  openHoursOptions,
  directBillingAvailable,
  language,
  imageUrl,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-md mb-6 overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="flex">
        {/* Image section */}
        <div className="relative w-1/3 flex-shrink-0">
          <img
            src={imageUrl}
            alt="Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2">
            <div className="text-white font-bold text-xs px-2 py-1 bg-blue-600 rounded">
              {rating}
            </div>
          </div>
          <div className="absolute bottom-2 left-2">
            <div className="text-white text-xs font-bold bg-black bg-opacity-60 px-2 py-1 rounded">
              {language} AVAILABLE
            </div>
          </div>
        </div>
        {/* Information section */}
        <div className="flex-grow p-4">
          <h2 className="text-l font-bold mb-2">{name}</h2>
          <p className="text-sm  font-bold text-black">
            {country} | <span className="text-sm text-red-600">{status}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">Calculating...</p>
          <div className="mt-2 flex items-center mb-11">
            <span className="text-xs mr-2">Open:</span>
            <select className="p-1 text-xs border rounded flex-grow">
              {openHoursOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {directBillingAvailable && (
            <div className="flex items-center justify-between mt-2">
              <span className="text-blue-800 cursor-pointer" style={{fontSize: "15px"}}>
                Direct Billing Available
              </span>
              <button
                onClick={toggleLike}
                className={`w-8 h-8 flex items-center justify-center border bg-gray-200 rounded-full transition-colors duration-300 ${
                  isLiked ? "bg-gray-300 hover:bg-gray-300" : "hover:bg-gray-300"
                }`}
              >
                {isLiked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 transition-all duration-300"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 transition-all duration-300 hover:fill-red-500"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const HospitalList: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const hospitals = [
    {
      id: 2,
      rating: 10.0,
      name: "Ho Chi Minh Toranomon Clinic",
      country: "Vietnam",
      status: "Closed",
      openHoursOptions: [
        "Saturday: 09:00 - 12:00",
        "Sunday: Closed",
        "Monday: 08:30 - 17:30",
        "Tuesday: 08:30 - 17:30",
        "Wednesday: 08:30 - 17:30",
        "Thursday: 08:30 - 17:30",
        "Friday: 08:30 - 17:30",
      ],
      directBillingAvailable: true,
      language: "JAPANESE",
      imageUrl: "/images/ho-chi-minh-toranomon.jpg",
    },
    {
      id: 3,
      rating: 7.6,
      name: "National Taiwan University Hospital",
      country: "Taiwan",
      status: "Closed",
      openHoursOptions: [
        "Saturday: 09:00 - 13:00",
        "Sunday: Closed",
        "Monday: 08:30 - 17:30",
        "Tuesday: 08:30 - 17:30",
        "Wednesday: 08:30 - 17:30",
        "Thursday: 08:30 - 17:30",
        "Friday: 08:30 - 17:30",
      ],
      directBillingAvailable: true,
      language: "CHINESE",
      imageUrl: "/images/national-taiwan-hospital.jpg",
    },
  ];

  return (
    <CardWrapper
      headerLabel={
        <div className="flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-lg mx-auto font-sans">
          <input
            type="text"
            placeholder="Hospital Name, City, or Country"
            className="p-2 border-none outline-none flex-grow text-sm text-black font-normal"
            style={{ fontFamily: "Arial, sans-serif" }}
          />
          <button
            className="px-4 py-2 bg-white text-green-600 border-l border-gray-300 hover:bg-green-500 hover:text-white transition-colors duration-200 text-sm font-medium"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Search
          </button>
        </div>
      }
      backButtonLabel=""
      backButtonHref=""
      showCloseButton={false}
    >
      <div
        className="flex justify-center mb-6 mt-4"
        style={{ marginLeft: "220px" }}
      >
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-4 py-1 border-2 border-black rounded hover:bg-gray-300"
          >
            Sort
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white border border-gray-300 rounded shadow-lg mt-2 w-48 z-10">
              <ul>
                <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Sort by Name
                </li>
                <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Sort by Rating
                </li>
                <li className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Sort by Distance
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="ml-2 px-4 py-1 border-2 border-black rounded flex items-center hover:bg-gray-300">
          Filter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="ml-1 w-4 h-4"
          >
            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5z" />
            <path
              fillRule="evenodd"
              d="M1.5 1a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.146.354L10 9.207V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-4.793l-3.854-5.853A.5.5 0 0 1 2.5 3V1z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center px-4">
        <div className="w-full max-w-md">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <HospitalCard {...hospital} />
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default HospitalList;
