"use client";

import { useState, useRef } from "react";
import { CardWrapper } from "@/components/card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpVerifyEmail = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [resendMessage, setResendMessage] = useState(""); // Thông báo gửi lại OTP
  const [showPrivacy, setShowPrivacy] = useState(false); // State để hiển thị popup
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

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

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && code[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const verifyCode = async () => {
    const enteredCode = code.join("");
    setLoading(true); // Bật trạng thái loading

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: enteredCode,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        setResendMessage("");
      } else {
        setError("");
        setResendMessage("");
        router.push("/auth/signupinfo");
      }
    } catch (error) {
      setError("An unexpected error occurred");
      console.error("Error during OTP verification:", error);
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    try {
      setError("");
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resend: true, // Gửi thông tin resend
        }),
      });

      if (response.ok) {
        setResendMessage(
          "A new verification code has been sent to your email."
        );
      } else {
        setResendMessage(
          "Failed to send the verification code. Please try again."
        );
      }
    } catch (error) {
      setResendMessage("An unexpected error occurred.");
    }
  };

  return (
    <CardWrapper
      headerLabel="Register (2/3)"
      backButtonLabel="←"
      backButtonHref="/auth/signup"
    >
      <div className="flex flex-col items-center px-4">
        <h3
          className="text-lg font-semibold text-center mb-2"
          style={{ letterSpacing: "0.5px", marginTop: "80px" }}
        >
          VERIFY ACCOUNT
        </h3>
        <p
          className="text-center text-sm mb-6"
          style={{ marginBottom: "40px" }}
        >
          Enter 5-digit code we have sent to your email
        </p>

        <div
          className="flex justify-center gap-4 mb-4"
          style={{ marginBottom: "16px" }}
        >
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

        {resendMessage && (
          <p className="text-green-500 text-center text-sm mb-4">
            {resendMessage}
          </p>
        )}

        <p className="text-center text-sm mb-4">
          Didn&apos;t receive the code?
        </p>
        <button
          className="text-gray-800 underline hover:text-blue-600 font-semibold text-center block mb-8"
          style={{ marginBottom: "50px" }}
          onClick={resendCode}
        >
          Resend Code
        </button>

        <Button
          onClick={verifyCode}
          style={{ width: "100%", height: "48px", fontSize: "16px" }}
          className="bg-black text-white rounded-md"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : (
            "Next"
          )}
        </Button>

        <p className="text-xs text-center mt-6" style={{ lineHeight: "1.5" }}>
          By clicking next, you agree to our{" "}
          <button
            className="text-gray-800 underline hover:text-blue-600"
            onClick={() => setShowPrivacy(true)}
          >
            Privacy Policy and Terms and Conditions
          </button>
        </p>
      </div>

      {showPrivacy && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowPrivacy(false)} // Đóng popup khi nhấn vào nền
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Ngăn việc đóng popup khi nhấn bên trong popup
          >
            <h2 className="text-lg font-semibold mb-4 text-center">
              PRIVACY POLICY
            </h2>
            <div className="text-justify">
              {" "}
              {/* Căn đều văn bản */}
              <p>
                Welcome to Vitabi, a smart platform for searching healthcare
                specialists and booking available appointments with them. Vitabi
                is a Japanese company having a place of business in Nanryo
                Midori-ku, Nagoya, Aichi, Japan with registration number
                2180001162209. We at Vitabi Inc. (“Vitabi,” “we,” “us,” “our”)
                respect your privacy.
                <br />
                <br />
                This Privacy Policy (the “Policy”) explains our privacy
                practices for the technology-based service (the “Service”) that
                we offer through our Internet web-site and resource vitabi.us
                (the “Website“) or web Vitabi application (the “App“). It
                describes how we collect personal information, use it and share
                it, and the rights and options available to you with respect to
                your information.
                <br />
                <br />
                Providing us with your personal information is a choice you
                make. We appreciate that and thank you for making this choice.
                You are not legally obligated to provide us with this
                information but we do need it in order to provide you with the
                Service.
                <br />
                <br />
                This policy constitutes part of our Vitabi End-Users’ Terms of
                Use and Vitabi Practitioners’ Terms of Use (together the “Terms
                of Use“) as they may be amended.
                <br />
                <br />
                <strong>In Short…</strong>
                <br />
                The following key points of the Privacy Policy are only brought
                for your convenience. They do not substitute the full Policy.
                <br />
                <br />
                <strong>Responsible Officer:</strong> You can contact our
                designated Data Protection Officer at the following address:
                vitabi.info@gmail.com
                <br />
                <br />
                <strong>Information we collect:</strong> We collect information
                you actively provide us (for example when you register to the
                Service) including your name, last name, policy number, email,
                mobile phone number, and birthday. Our third-party billing
                providers will collect your payment method and billing
                information. We also may collect certain billing information. We
                also collect analytical information about your use of the
                Service (e.g., the frequency and scope of your use of the
                Service) and information about your device and geolocation
                provided you have given us your permission.
                <br />
                <br />
                <strong>
                  What is your data used for and with what legal basis?
                </strong>{" "}
                In order to provide the service, we use the information we
                collect (and information received from physicians) primarily to
                provide you with the functions of the Service including sending
                updates and other communications related to the Service itself.
                On the basis of our legitimate interest, we may also use the
                data (i) to improve and personalize the Service and develop new
                products, (ii) for statistical purposes provided that your
                information is first anonymized and aggregated in accordance
                with legal requirements and industry standards, and (iii) to
                send you commercial communications for marketing purposes. You
                have the right to object at any time to the processing of your
                personal data for treatments based on legitimate interest,
                especially for use for marketing purposes by means of an email
                to: vitabi.info@gmail.com with the subject: OPPOSITION. Based on
                your consent, information from your geolocation may also be
                used.
                <br />
                <br />
                <strong>Recipients:</strong> To operate, maintain, and provide
                the Service, we must share your information (including
                information received from physicians) with your insurance
                companies, with Assistance Companies (as defined in the expanded
                information), with physicians to request appointments, and with
                other external service providers subject to execution of
                contracts that adequately guarantee the confidentiality of the
                information.
                <br />
                <br />
                <strong>Rights:</strong> You can request access, rectification,
                deletion, opposition, revocation of your consents, portability
                (where appropriate), limitation of treatment, or file a claim
                with the Data Protection Agency or with us previously so that we
                can help you. Address your request to the addresses indicated in
                the “Responsible Officer” section: vitabi.info@gmail.com.
                <br />
                <br />
                <strong>Aggregated information:</strong> We may use the
                information we collect from you to create information that is
                not personally identifiable, such as statistical or aggregated
                information, and make it available to others for any purpose.
                <br />
                <br />
                <strong>Retention:</strong> We keep your information (including
                with respect to insurance policies) for as long as is legally
                necessary for the purpose for which it was first obtained. If
                you revoke your consent for us to process your data, we will
                erase your personal data from our systems, keeping only those
                data that are necessary to fulfill our legal or contractual
                obligations.
                <br />
                <br />
                <strong>Security:</strong> We implement measures to reduce the
                risks of damage and unauthorized access or use of information,
                but they do not provide absolute information security.
                <br />
                <br />
                <strong>Information you actively provide us:</strong> The
                Service is available only to registered users. You may register
                with the Platform directly.
                <br />
                <br />
                <strong>Registration:</strong> If you register with the Platform
                directly, we will seek basic information from you such as your
                name, email address, mobile phone number, birthday, and other
                information that personally identifies you or could be used to
                personally identify you (the “Personal Information“).
                <br />
                <br />
                <strong>Payment information:</strong> Our third-party billing
                providers will collect your payment method and billing
                information for the purpose of collecting the fees applicable to
                you. The payment information we may store, if permitted by you,
                includes your payment card type and the last four digits of the
                payment card.
                <br />
                <br />
                <strong>Mobile phone number:</strong> We collect your mobile
                phone number. We will use that number to send you Service alerts
                and notifications via text messages (SMS) and pop-up
                notifications.
                <br />
                <br />
                <strong>Medical data:</strong> We may collect medical data
                solely to the extent needed to provide you with our services.
                This data may include the doctors, dentists, or other healthcare
                specialists, professionals, providers, or organizations
                (collectively “Practitioner(s)”) you have visited and/or
                Practitioners recommended to you by us, your reasons for visit,
                your dates of visit, and other medical and health information
                you choose to share with us by completing medical history forms
                or otherwise.
                <br />
                <br />
                <strong>Geolocation information:</strong> We collect your
                precise geolocation when you use the App and your approximate
                location when you use the Website provided that you have
                authorized or consented to it.
                <br />
                <br />
                <strong>Analytic Information:</strong> When you access or use
                the Service, we use analytics tools of third parties to
                automatically collect information about your use of the Service.
                This information includes your session durations, the content
                you accessed on the Service, your interactions and
                user-interface clicks with respect to such content, referring
                URLs, and the frequency and scope of your use of the Service.
                <br />
                <br />
                <strong>Device information:</strong> We may collect information
                about your personal computer or mobile device, including its
                model, its operating system, unique device identifiers, the
                browser you use, its version and language (i.e., locale)
                preferences, mobile network information, and the Internet
                Protocol (IP) address through which you accessed the Service.
                <br />
                <br />
                <strong>Children’s Privacy:</strong> The Service is not intended
                for children under the age of 18 or people who lack or have
                limited capacity to act. We do not knowingly or intentionally
                collect information about children who are under 18 years of age
                except as provided by their legal custodians for the purpose of
                providing such children with Service.
                <br />
                <br />
                <strong>Information Security:</strong> We implement measures to
                reduce the risks of damage, loss of information, and
                unauthorized access or use of information. These measures do not
                provide absolute information security.
                <br />
                <br />
                <strong>Changes to This Privacy Policy:</strong> We may change
                this Policy, in which case we will seek your consent to those
                changes. If you do not consent to the amended Policy, we may
                terminate your account and block your access to and use of the
                Service.
                <br />
                <br />
              </p>
            </div>
            <Button className="mt-4" onClick={() => setShowPrivacy(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </CardWrapper>
  );
};

export default SignUpVerifyEmail;
