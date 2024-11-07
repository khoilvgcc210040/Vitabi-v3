"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { CardWrapper } from "@/components/card-wrapper";

const AppointmentInformationForm = () => {
  const { t } = useTranslation();
  const [preferredDate, setPreferredDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [addSecondTime, setAddSecondTime] = useState(false);
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      console.log("Form Data", {
        preferredDate,
        startTime,
        endTime,
        addSecondTime,
        symptoms,
        duration,
      });
    } else {
      form.reportValidity();
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <CardWrapper
        headerLabel={
          <div className="flex justify-center items-center w-full">
            <Link href="/book1">
              <span className="text-lg">←</span>
            </Link>
            <h1 className="text-center flex-grow font-semibold text-lg">
              {t("Appointment Information")} (2/3)
            </h1>
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
              ✖
            </Link>
          </div>
        }
        backButtonHref="/"
        showCloseButton={false}
        showFooter={false}
      >
        <div className="w-full max-w-md p-6 space-y-4 mt-6">
          {/* Hospital Information */}
          <div>
            <label className="block font-medium mb-2">{t("Hospital")}</label>
            <div className="flex items-start space-x-4 border border-gray-300 rounded-lg">
              <img
                src="/images/indonesia_25.jpg"
                alt="Hospital"
                className="w-32 h-60"
              />
              <div className="flex flex-col">
                <p className="font-semibold text-lg mb-2">
                  Family Medical Practice - International Clinic
                </p>
                <div className="flex flex-col">
                  <p className="font-semibold text-xs py-1">
                    Monday: <span className="font-normal">08:30 - 17:30</span>
                  </p>
                  <p className="font-semibold text-xs py-1">
                    Tuesday: <span className="font-normal">08:30 - 17:30</span>
                  </p>
                  <p className="font-semibold text-xs py-1">
                    Wednesday:{" "}
                    <span className="font-normal">08:30 - 17:30</span>
                  </p>
                  <p className="font-semibold text-xs py-1">
                    Thursday: <span className="font-normal">08:30 - 17:30</span>
                  </p>
                  <p className="font-semibold text-xs py-1">
                    Friday: <span className="font-normal">08:30 - 17:30</span>
                  </p>
                  <p className="font-semibold text-xs py-1">
                    Saturday: <span className="font-normal">08:30 - 12:30</span>
                  </p>
                  <p className="font-semibold text-xs py-1">
                    Sunday: <span className="font-normal">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preferred Date and Time */}
          <div>
            <label className="block text-sm font-medium text-red-500 mt-7 mb-2 text-base">
              *
              <span className="text-gray-800 text-base">
                {t(" 1st Preferred Time")}{" "}
              </span>
              <span className="text-red-500 italic text-base">
                {t("Required")}
              </span>
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded mb-2"
              required
            />

            <div className="flex space-x-2 mb-9">
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-1/2 border border-gray-300 p-3 rounded"
                required
              />
              <span className="text-center pt-3">~</span>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-1/2 border border-gray-300 p-3 rounded"
                required
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={addSecondTime}
                onChange={() => setAddSecondTime(!addSecondTime)}
                className="mr-2 w-5 h-5 rounded-md text-gray-500 bg-gray-200 border-gray-300 focus:ring-0"
              />
              <label className="text-gray-700">
                {t("Also Add 2nd Preferred Time")}
              </label>
            </div>

            {addSecondTime && (
              <div className="space-y-4 mb-12">
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  placeholder="mm/dd/yyyy"
                  className="w-full border border-gray-300 p-3 rounded mb-2"
                />
                <div className="flex space-x-2">
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    placeholder="Start Time"
                    className="w-1/2 border border-gray-300 p-3 rounded"
                  />
                  <span className="text-center pt-3">~</span>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    placeholder="End Time"
                    className="w-1/2 border border-gray-300 p-3 rounded"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Symptoms Section */}
          <div>
            <label className="block text-sm font-medium text-red-500 mt-8">
              *{" "}
              <span className="text-gray-800 text-base">
                {t("What is your symptom?")}
              </span>
            </label>
            <p className="text-sm text-gray-600 mt-1">
              {t(
                "Please provide as much information as possible to facilitate your appointment processing."
              )}
            </p>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Example: After eating Pad Thai at a street stall in Bangkok yesterday, I started having constant stomach aches and diarrhea."
              className="w-full border border-gray-300 pt-1 px-3 pb-1 rounded-md mt-2 mb-5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
              style={{
                overflow: "hidden",
                resize: "none",
                height: "120px",
              }}
            ></textarea>
          </div>

          {/* Duration Section */}
          <div>
            <label className="block text-sm font-medium text-red-500">
              *
              <span className="text-gray-800 text-base">
                {" "}
                {t(" How long does it last?")}
              </span>
            </label>
            <textarea
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Example: 5 days, 3 hours, or just a few hours ago."
              className="w-full border border-gray-300 p-4 rounded"
              required
              style={{
                overflow: "hidden",
                resize: "none",
              }}
            ></textarea>
          </div>

          <div
          className="fixed bottom-0 left-1/2 transform -translate-x-1/2 p-4  bg-white"
          style={{
            width: "100%",
            maxWidth: "22rem",
            
          }}
        >
          <Link href="/book4">
          <button
            type="submit"
            className="bg-black text-white w-full py-3 rounded text-xl font-semibold"
          >
            {t("Next")}
          </button>
          </Link>
        </div>
        </div>
      </CardWrapper>
    </form>
  );
};

export default AppointmentInformationForm;
