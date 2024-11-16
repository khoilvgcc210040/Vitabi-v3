"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddDistanceInfo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hospital: "",
    distanceText: "",
    durationText: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Logic để lưu dữ liệu
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Add Distance Info</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold">Hospital:</label>
          <select
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Select hospital</option>
            {/* Add hospital options here */}
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold">Distance text:</label>
          <input
            type="text"
            name="distanceText"
            value={formData.distanceText}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Duration text:</label>
          <input
            type="text"
            name="durationText"
            value={formData.durationText}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-4" onClick={handleSubmit}>
          Save
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => router.push("/DistanceInfo")}>
          Back to List
        </button>
      </div>
    </div>
  );
};

export default AddDistanceInfo;
