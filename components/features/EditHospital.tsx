"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import countryList from "react-select-country-list";
import moment from "moment-timezone";
import { SingleValue } from "react-select";

interface SelectOption {
  value: string;
  label: string;
}
const EditHospital = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    workingTime: "",
    supportedLanguages: [],
    supportedInsurance: [],
    address: "",
    phoneNumber: "",
    directBilling: false,
    rating: "",
    country: "",
    timezone: "UTC",
    linkMap: "",
    embedMap: "",
    latitude: "",
    longitude: "",
    placeId: "",
    lastApiUpdate: "",
    userRatingsTotal: "",
  });

  const languages = ["English", "Vietnamese", "Japanese"];
  const insurances = ["Tokyo Marine", "Aioi Nissei", "JI", "Mitsui-Sumitomo", "Sompo Japan", "AIG", "HS"];
  
  const countriesOptions = countryList().getData();
  const timezones = moment.tz.names().map((tz) => ({ value: tz, label: tz }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, key: string) => {
    const options = Array.from(e.target.selectedOptions, (option) => (option as HTMLOptionElement).value);
    setFormData((prevData) => ({
      ...prevData,
      [key]: options,
    }));
  };

  const handleCountryChange = (selectedOption: SingleValue<SelectOption>) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption ? selectedOption.label : "",
    }));
  };
  
  const handleTimezoneChange = (selectedOption: SingleValue<SelectOption>) => {
    setFormData((prevData) => ({
      ...prevData,
      timezone: selectedOption ? selectedOption.value : "UTC",
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Logic để lưu dữ liệu
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Add Hospital</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Working time:</label>
          <input
            type="text"
            name="workingTime"
            value={formData.workingTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Supported languages:</label>
          <select
            multiple
            onChange={(e) => handleMultiSelectChange(e, "supportedLanguages")}
            className="w-full border border-gray-300 rounded p-2"
          >
            {languages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Supported insurance:</label>
          <select
            multiple
            onChange={(e) => handleMultiSelectChange(e, "supportedInsurance")}
            className="w-full border border-gray-300 rounded p-2"
          >
            {insurances.map((insurance) => (
              <option key={insurance} value={insurance}>
                {insurance}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 font-semibold">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Phone number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Direct billing:</label>
          <input
            type="checkbox"
            name="directBilling"
            checked={formData.directBilling}
            onChange={handleChange}
            className="mt-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Country:</label>
          <Select
            options={countriesOptions}
            onChange={handleCountryChange}
            className="w-full"
            placeholder="Select country"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Timezone:</label>
          <Select
            options={timezones}
            onChange={handleTimezoneChange}
            className="w-full"
            placeholder="Select timezone"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-2 font-semibold">Link map:</label>
          <input
            type="text"
            name="linkMap"
            value={formData.linkMap}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-2 font-semibold">Embed map:</label>
          <textarea
            name="embedMap"
            value={formData.embedMap}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 font-semibold">Latitude:</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Longitude:</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-2 font-semibold">PlaceId:</label>
          <input
            type="text"
            name="placeId"
            value={formData.placeId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Last api update:</label>
          <input
            type="text"
            name="lastApiUpdate"
            value={formData.lastApiUpdate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">User ratings total:</label>
          <input
            type="text"
            name="userRatingsTotal"
            value={formData.userRatingsTotal}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-4"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => router.push("/HospitalList")}
        >
          Back to List
        </button>
      </div>
    </div>
  );
};

export default EditHospital;
