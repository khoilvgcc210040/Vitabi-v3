"use client";
import React, { useState } from "react";
import { CardWrapper } from "./card-wrapper";

const FilterPage = () => {
  const [country, setCountry] = useState("");
  const [insurance, setInsurance] = useState("All Insurances");
  const [languageJapanese, setLanguageJapanese] = useState(false);
  const [languageEnglish, setLanguageEnglish] = useState(false);
  const [openingNow, setOpeningNow] = useState(false);
  const [allDay, setAllDay] = useState(false);
  const [customHours, setCustomHours] = useState(false);
  const [distance, setDistance] = useState({
    lessThan1km: false,
    lessThan3km: false,
    lessThan5km: false,
    customDistance: false,
  });

  const handleReset = () => {
    setCountry("");
    setInsurance("All Insurances");
    setLanguageJapanese(false);
    setLanguageEnglish(false);
    setOpeningNow(false);
    setAllDay(false);
    setCustomHours(false);
    setDistance({
      lessThan1km: false,
      lessThan3km: false,
      lessThan5km: false,
      customDistance: false,
    });
  };

  return (
    <CardWrapper
      headerLabel="Filter"
      backButtonLabel="←"
      backButtonHref="/findhospital"
      showCloseButton={false}
      rightButtonLabel="Reset"
      onRightButtonClick={handleReset}
      showFooter={false}
    >
      <div className="px-4 py-6">
        <div className="space-y-6 overflow-y-auto">
          <div className="mb-4 mt-6">
            <h2 className="text-2xl font-bold">Country</h2>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-6 text-gray-700 appearance-none"
            >
              <option value="">Select Country</option>
              <option>Indonesia (41)</option>
              <option>India (11)</option>
              <option>Cambodia (8)</option>
              <option>Korea, Republic of (11)</option>
              <option>Lao People&apos;s Democratic Republic (3)</option>
              <option>Myanmar (3)</option>
              <option>Malaysia (31)</option>
              <option>Philippines (14)</option>
              <option>Singapore (22)</option>
              <option>Thailand (39)</option>
              <option>Taiwan, Province of China (24)</option>
              <option>United States (53)</option>
              <option>Viet Nam (26)</option>
              <option>Zimbabwe (7)</option>
            </select>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold">Insurance</h2>
            <select
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full border rounded px-4 py-2 mt-6 text-gray-700"
            >
              <option>All Insurances</option>
              <option>Tokyo Marine</option>
              <option>Aioi Nissei</option>
              <option>JI</option>
              <option>Mitsui-Sumitomo</option>
              <option>Sompo Japan</option>
              <option>AIG</option>
              <option>HS</option>
            </select>
          </div>

          {/* Language Section */}
          <div>
            <h2 className="text-2xl font-bold">Language</h2>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={languageJapanese}
                onChange={(e) => setLanguageJapanese(e.target.checked)}
                className="mr-2"
              />
              Japanese-speaking staff available
            </label>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={languageEnglish}
                onChange={(e) => setLanguageEnglish(e.target.checked)}
                className="mr-2"
              />
              English-speaking staff available
            </label>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h2 className="text-2xl font-bold">Opening Hours</h2>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={openingNow}
                onChange={(e) => setOpeningNow(e.target.checked)}
                className="mr-2"
              />
              Open Now
            </label>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={allDay}
                onChange={(e) => setAllDay(e.target.checked)}
                className="mr-2"
              />
              All Day
            </label>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={customHours}
                onChange={(e) => setCustomHours(e.target.checked)}
                className="mr-2"
              />
              Custom Hours
            </label>
          </div>

          {/* Distance Section */}
          <div>
            <h2 className="text-2xl font-bold">Distance</h2>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={distance.lessThan1km}
                onChange={(e) =>
                  setDistance((prev) => ({
                    ...prev,
                    lessThan1km: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              Less than 1km (1)
            </label>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={distance.lessThan3km}
                onChange={(e) =>
                  setDistance((prev) => ({
                    ...prev,
                    lessThan3km: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              Less than 3km (1)
            </label>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={distance.lessThan5km}
                onChange={(e) =>
                  setDistance((prev) => ({
                    ...prev,
                    lessThan5km: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              Less than 5km (2)
            </label>
            <label className="flex items-center mt-6 text-gray-700">
              <input
                type="checkbox"
                checked={distance.customDistance}
                onChange={(e) =>
                  setDistance((prev) => ({
                    ...prev,
                    customDistance: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              Custom Distance
            </label>
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4  flex justify-center"
        style={{
          width: "100%",
          maxWidth: "27.8rem",
        }}
      >
        <button
          className="w-full bg-black text-lg text-white py-2 rounded-md font-bold"
          style={{
            maxWidth: "350px",
            padding: "10px 32px",
            fontSize: "18px",
          }}
        >
          Search
        </button>
      </div>
    </CardWrapper>
  );
};

export default FilterPage;
