"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper";
import Link from "next/link";

const BookingDetail = () => {
  const images = [
    "/images/indonesia_25.jpg",
    "/images/indonesia_25.jpg",
    "/images/indonesia_25.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <CardWrapper
      headerLabel="Hospital Details"
      backButtonLabel="←"
      backButtonHref="/bookings"
      showCloseButton={false}
    >
     <div className="px-6 py-4 relative">
      
        <div className="relative w-full h-48 overflow-hidden">
     
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

   
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600  bg-opacity-70 p-2 rounded-full"
        style={{ zIndex: 10 }}
      >
        &#10094;
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-600  bg-opacity-70 p-2 rounded-full"
        style={{ zIndex: 10 }}
      >
        &#10095;
      </button>
    </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-xl">Abdi Waluyo Hospital</h2>
            <span className="bg-green-700 text-white px-3 py-1 rounded-md text-xs font-semibold mt-1">
              Approved
            </span>
          </div>
        </div>

        {/* Personal Information */}
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-base text-gray-600 mb-2">
            Personal Information
          </h3>
          <ul className="list-disc">
            <li className="text-sm flex items-center">
              <span className="text-2xl mr-2">•</span>
              <span>
                <span className="font-semibold">Name:</span> Khoi Lieu
              </span>
            </li>
            <li className="text-sm flex items-center">
              <span className="text-2xl mr-2">•</span>
              <span>
                <span className="font-semibold">Gender:</span> Male
              </span>
            </li>
            <li className="text-sm flex items-center">
              <span className="text-2xl mr-2">•</span>
              <span>
                <span className="font-semibold">Date of Birth:</span> 2024/04/16
              </span>
            </li>
            <li className="text-sm flex items-center">
              <span className="text-2xl mr-2">•</span>
              <span>
                <span className="font-semibold">Email Address:</span>{" "}
                khoivl.net@gmail.com
              </span>
            </li>
            <li className="text-sm flex items-center">
              <span className="text-2xl mr-2">•</span>
              <span>
                <span className="font-semibold">Phone Number:</span>{" "}
                +84-814744236
              </span>
            </li>
          </ul>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-base text-gray-600 mb-2">
            Appointment Information
          </h3>
          <ul className="list-disc">
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
              <span>
                <span className="font-semibold">Reserved Time:</span>
                <div>2024/08/22 14:30~16:30</div>
              </span>
            </li>
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
              <span>
                <span className="font-semibold">Symptom:</span>
                <div>1</div>
              </span>
            </li>
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
              <span>
                <span className="font-semibold">Duration:</span>
                <div>1</div>
              </span>
            </li>
          </ul>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-base text-gray-600 mb-2">
            Insurance Information
          </h3>
          <ul className="list-disc">
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
              <span>
                <span className="font-semibold">Insurance Status:</span>
                <div className="text-gray-600 underline">
                  Insurance Unsupported
                </div>
              </span>
            </li>
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
              <span>
                <span className="font-semibold">Insurance:</span> No coverage
              </span>
            </li>
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
           
              <span>
                <span className="font-semibold">Policy Number:</span> A12345
              </span>
            </li>
            <li className="text-sm flex items-start mb-2">
              <span className="text-2xl mr-2 leading-3 mt-1">•</span>{" "}
             
              <span>
                <span className="font-semibold">Date Created:</span>
                <div>2024/08/22 07:25 AM</div>
              </span>
            </li>
          </ul>
        </div>
        <Link
          href="/hospitalinfo"
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm("Are you sure you want to cancel?")) {
              window.location.href = "/hospitalinfo";
            }
          }}
          className="text-xl"
        >
          <button className="bg-red-600 text-white w-full py-1 text-base rounded font">
            Cancel an appointment
          </button>
        </Link>
        
      </div>
    </CardWrapper>
  );
};

export default BookingDetail;
