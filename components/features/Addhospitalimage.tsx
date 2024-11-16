"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const hospitalName= ["Hanoi French Hospital","Hanoi French Hospital", "Hanoi French Hospital"]
const AddHospitalImage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    hospital: "",
    photo: null as File | null,
    originalUrl: "",
    uniqueUrl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Thực hiện xử lý lưu dữ liệu ở đây
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Add Hospital Image</h1>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Hospital:</label>
        <select
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="">Select a hospital</option>
          {hospitalName.map((hospital) => (
              <option key={hospital} value={hospital}>
                {hospital}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Photo:</label>
        <input
          type="file"
          name="photo"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Original URL:</label>
        <input
          type="text"
          name="originalUrl"
          value={formData.originalUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold">Unique URL:</label>
        <input
          type="text"
          name="uniqueUrl"
          value={formData.uniqueUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2"
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-4"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/HospitalImagesList")}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default AddHospitalImage;
