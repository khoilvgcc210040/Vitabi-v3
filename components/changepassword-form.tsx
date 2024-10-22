"use client";

import React, { useState } from "react";
import { CardWrapper } from "@/components/card-wrapper";

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }
    alert("Password changed successfully!");
  };

  return (
    <CardWrapper
      headerLabel={<span className="text-xl font-bold">Change Password</span>}
      backButtonLabel="←"
      backButtonHref="/users/passwordsecurity"
      showCloseButton={false}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col px-4"
        style={{ marginTop: "50px" }}
      >
        <label className="font text-gray-600">Current password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          placeholder="Enter current password"
          className="mb-4 border border-gray-300 px-3 py-2 rounded-md"
          style={{ marginTop: "6px" }}
        />

        <label className="font text-gray-600">New password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          className="mb-4 border border-gray-300 px-3 py-2 rounded-md"
          style={{ marginTop: "6px" }}

        />

        <label className="font text-gray-600">Confirm new password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter new password"
          className="mb-4 border border-gray-300 px-3 py-2 rounded-md"
          style={{ marginTop: "6px" }}

        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700"
          style={{
            transition: "background 0.3s ease",
            width: "160px", 
            padding: "10px 10px", 
            fontSize: "14px", 
            textAlign: "center", 
          }}
        >
          Change my password
        </button>
      </form>
    </CardWrapper>
  );
};

export default ChangePassword;
