"use client";

import { useState } from "react";
import Link from "next/link";
import { CardWrapper } from "@/components/card-wrapper";
import ReactCountryFlag from "react-country-flag";


const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    if (rating >= starValue) {
  
      return (
        <svg
          key={index}
          className="w-5 h-5 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    } else {
     
      return (
        <svg
          key={index}
          className="w-5 h-5 text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
  });
  return <div className="flex">{stars}</div>;
};

export const HospitalInfo = () => {
  const [activeTab, setActiveTab] = useState("Services");
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <CardWrapper showHeader={false} showFooter={false}>
      {/* Custom Header */}
      <div className="relative">
        <img
          src="/images/background.png"
          alt="Clinic"
          className="object-cover"
          style={{
            height: "240px",
            width: "200%",
            maxWidth: "50rem",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            borderTop: "1px solid #d4d4d4",
            borderRadius: "0" 
          }}
        />

        <div className="absolute top-2 left-2">
          <Link href="/findhospital/filterhospital">
            <button className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center">
              {/* Icon mũi tên quay lại */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5M12 19l-7-7 7-7"
                />
              </svg>
            </button>
          </Link>
        </div>

        <div className="absolute top-2 right-2">
          <button
            onClick={toggleLike}
            className={`bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center border border-transparent hover:bg-gray-400 hover:border-gray-400 transition-colors ${
              isLiked ? "text-red-500" : "text-current"
            }`}
          >
            {/* Icon trái tim với màu thay đổi khi isLiked là true */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          1/10
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">
          Ho Chi Minh City Family Medical Practice - District 7 Clinic
        </h2>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-black text-sm font-bold">3.7</span>
          <StarRating rating={3.7} />
          <span className="text-blue-800 text-sm font-bold">(83)</span>
        </div>
        <p className="text-gray-500 text-l mt-2">
          RiverPark Premier, Block C, 41 Dang Duc Thuat, Tan Phong, District 7,
          Ho Chi Minh City, Vietnam
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mt-4">
        {["Services", "Reviews", "Photo", "About"].map((tab) => (
          <button
            key={tab}
            className={`py-1 px-3 text-sm font-bold text-black rounded-full ${
              activeTab === tab
                ? "bg-black text-white font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 overflow-y-auto">
        {activeTab === "Services" && (
          <div>
            <h3 className="text-lg font-semibold">Supported Insurance</h3>
            <p className="text-gray-500 text-sm mt-1">
              Insurance information may change and is provided for reference
              only.
            </p>
            <div className="flex mt-2 space-x-4">
              <img
                src="/tokio-marine.png"
                alt="Tokio Marine"
                width={50}
                height={50}
              />
              <img
                src="/sompo-japan.png"
                alt="Sompo Japan"
                width={50}
                height={50}
              />
            </div>

            <h3 className="text-lg font-semibold mt-6">Supported Languages</h3>
            <div className="flex space-x-4 mt-2">
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: "2em", height: "1.5em" }}
              />
              <ReactCountryFlag
                countryCode="VN"
                svg
                style={{ width: "2em", height: "1.5em" }}
              />
              <ReactCountryFlag
                countryCode="JP"
                svg
                style={{ width: "2em", height: "1.5em" }}
              />
            </div>

            {/* Direct Billing Service Instructions */}
            <div className="mt-6 p-4 border rounded-md bg-gray-50">
              <h4 className="text-blue-600 font-semibold">
                How to Use Direct Billing Service
              </h4>
              <ol className="list-decimal list-inside text-sm mt-2 text-gray-700 space-y-1">
                <li>Book a hospital</li>
                <li>
                  Present your insurance policy at the reception desk and ask
                  for cashless service to be provided. (You may need your
                  passport.)
                </li>
                <li>Receive treatment.</li>
              </ol>
              <p className="text-sm text-gray-500 mt-3">
                If needed, call 028-3930-2115, 028-3930-3115
              </p>
            </div>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div>
            <h3 className="text-lg font-semibold">Reviews</h3>
            <div className="flex flex-col items-start space-y-1 mt-4">
              <div
                style={{
                  transform: "scale(1.5)",
                  paddingLeft: "15px",
                  marginBottom: "1rem",
                }}
              >
                <StarRating rating={3.7} />
              </div>

              <div className="flex items-center space-x-1 ">
                <span className="text-black font-semibold text-sm">3.7</span>
                <span className="text-black font-semibold">•</span>{" "}
                <span className="text-black font-semibold text-sm">
                  83 reviews
                </span>
              </div>
            </div>

            <div className="mt-4">
              {[5, 4, 3, 2, 1].map((star, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">{star}</span>
                  <div
                    className="flex-grow bg-gray-200 mx-2 rounded-full"
                    style={{ height: "4px" }}
                  >
                    <div
                      className="bg-black rounded-full"
                      style={{
                        width: `${
                          star === 5 ? "80%" : star === 4 ? "1%" : "0%"
                        }`,
                        height: "100%",
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">
                    {star === 5 ? 82 : star === 4 ? 1 : 0}
                  </span>
                </div>
              ))}
            </div>

            {/* Bộ lọc và sắp xếp */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600 text-sm">83 reviews</p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">Sort by</span>
                <div className="relative">
                  <select className="text-gray-700 text-sm font-semibold border border-gray-300 rounded-full pl-2 pr-1 py-1 appearance-none bg-white focus:outline-none">
                    <option>Latest</option>
                    <option>Oldest</option>
                    <option>Highest rating</option>
                    <option>Lowest rating</option>
                  </select>
                  {/* Icon mũi tên */}
                  <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg
                      className="w-3 h-3 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 111.08 1.04l-4.25 4.84a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Đánh giá chi tiết */}
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <p className="text-sm font-semibold">Jessie T.</p>
                  <p className="text-xs text-gray-500">
                    Today Sep 17, 2024 at 5:02 PM
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <StarRating rating={5} />{" "}
                {/* Sử dụng StarRating cho phần ngôi sao đánh giá chi tiết */}
                <p className="text-sm mt-1 text-gray-700">
                  Emily is great! She provided very good service.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Photo" && (
          <div>
            {/* Photo Gallery */}
            <h3 className="text-lg font-semibold">Photo Gallery</h3>
            <img
              src="/clinic-photo.jpg"
              alt="Clinic Photo 1"
              className="w-full rounded-lg mt-2"
            />
            <img
              src="/clinic-photo-2.jpg"
              alt="Clinic Photo 2"
              className="w-full rounded-lg mt-4"
            />
          </div>
        )}

        {activeTab === "About" && (
          <div>
            <h3 className="text-lg font-semibold">Opening times</h3>
            <ul className="text-sm mt-2 space-y-2">
              {[
                { day: "Monday", time: "Closed", isOpen: false },
                {
                  day: "Tuesday",
                  time: "10:00AM - 12:00PM / 2:00PM - 5:00PM",
                  isOpen: true,
                },
                { day: "Wednesday", time: "10:00 AM - 5:00 PM", isOpen: true },
                { day: "Thursday", time: "10:00 AM - 5:00 PM", isOpen: true },
                { day: "Friday", time: "10:00 AM - 5:00 PM", isOpen: true },
                { day: "Saturday", time: "10:00 AM - 12:00 PM", isOpen: true },
                { day: "Sunday", time: "Closed", isOpen: false },
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        item.isOpen ? "bg-green-500" : "bg-gray-300"
                      }`}
                    ></span>
                    <span
                      className={`${
                        item.isOpen ? "text-gray-700" : "text-gray-400"
                      }`}
                    >
                      {item.day}
                    </span>
                  </div>
                  <span
                    className={`${
                      item.isOpen ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>

            {/* Additional Information */}
            <h3 className="text-lg font-semibold mt-6">
              Additional information
            </h3>
            <p className="text-sm mt-2">
              <strong>Address:</strong> 65 Vo Van Tan Street, Vo Thi Sau Ward,
              District 3, HCMC, Vietnam
            </p>
            <p className="text-sm mt-2">
              <strong>Phone number:</strong> 028-3930-2115, 028-3930-3115
            </p>

            {/* Embedded Map */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4514732054627!2d106.68281211434893!3d10.77696149232105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef8d3e16d69%3A0x6f7d132b5fa88d12!2sSai%20Gon%20Toranomon%207%20Clinic!5e0!3m2!1sen!2s!4v1601998493419!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Custom Footer */}
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4 flex justify-between items-center bg-white"
        style={{
          width: "100%",
          maxWidth: "27.8rem",
          borderTop: "1px solid #d4d4d4",
        }}
      >
        <p className="text-gray-500 text-l">Japanese Available</p>
        <Link href="/book1">
        <button className="bg-black text-white px-5 py-3 rounded text-base font-semibold">
          Book now
        </button>
        </Link>
      </div>
    </CardWrapper>
  );
};

export default HospitalInfo;
