"use client";

import { useState, useRef } from "react";
import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUpVerifyEmail = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const [error, setError] = useState<string>("");
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]); 

  const correctCode = "12345"; 

  const handleChange = (index: number, value: string) => {
    const newCode: string[] = [...code];
  
    if (/^[0-9]$/.test(value)) {
      newCode[index] = value;
      setCode(newCode);
  
      if (index < 4 && value !== "") {
        inputsRef.current[index + 1]?.focus();
      }
    } else if (value === "") {
      newCode[index] = "";
      setCode(newCode);
  
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && code[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };
  
  const verifyCode = () => {
    const enteredCode = code.join("");
    if (enteredCode !== correctCode) {
      setError("The verification code is incorrect. Please try again.");
    } else {
      setError("");
    }
  };

  return (
    <CardWrapper
      headerLabel="Register (2/3)"
      backButtonLabel="←"
      backButtonHref="/auth/signup"
    >
      <div className="flex flex-col items-center px-4">
        <h3 className="text-lg font-semibold text-center mb-2" style={{ letterSpacing: "0.5px", marginTop: "80px" }}>
          VERIFY ACCOUNT
        </h3>
        <p className="text-center text-sm mb-6" style={{ marginBottom: "40px" }}>
          Enter 5-digit code we have sent to your email
        </p>

        <div className="flex justify-center gap-4 mb-4" style={{ marginBottom: "16px" }}>
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => {
                if (el !== null) {
                  inputsRef.current[index] = el;
                }
              }} 
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)} 
              style={{
                width: "50px",
                height: "50px",
                fontSize: "18px",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
              className="focus:outline-none"
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <p className="text-center text-sm mb-4">
          Didn&apos;t receive the code?
        </p>
        <Link
          href="/resend"
          className="text-gray-800 underline hover:text-blue-600 font-semibold text-center block mb-8" style={{ marginBottom: "50px" }}>
          Resend Code
        </Link>

        <Button
          onClick={verifyCode}
          style={{ width: "100%", height: "48px", fontSize: "16px" }}
          className="bg-black text-white rounded-md"
        >
          Next
        </Button>

        <p className="text-xs text-center mt-6" style={{ lineHeight: "1.5" }}>
          by clicking next, you agree to our{" "}
          <Link href="/privacy" className="text-gray-800 underline hover:text-blue-600" >
            Privacy Policy and Terms and Conditions
          </Link>
        </p>
      </div>
    </CardWrapper>
  );
};

export default SignUpVerifyEmail;
