"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const hospitals = ["Family Medical Practice District 7", "Franco Vietnamese Hospital"];
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const EditWorkingHour: React.FC = () => {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    hospital: hospitals[0], // Hospital mặc định, có thể thay đổi theo dữ liệu cần chỉnh sửa
    dayOfWeek: "Monday",
    openTime: "08:00",
    closeTime: "17:00",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Logic để lưu dữ liệu nếu cần thiết
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Working Hour</h1>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Hospital:</label>
          <select
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
            disabled
          >
            {hospitals.map((hospital) => (
              <option key={hospital} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Day of week:</label>
          <select
            name="dayOfWeek"
            value={formData.dayOfWeek}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {daysOfWeek.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Open time:</label>
          <input
            type="time"
            name="openTime"
            value={formData.openTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Close time:</label>
          <input
            type="time"
            name="closeTime"
            value={formData.closeTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600 transition mr-4"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded shadow-md hover:bg-gray-600 transition"
          onClick={() => router.push("/WorkingHoursList")}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default EditWorkingHour;