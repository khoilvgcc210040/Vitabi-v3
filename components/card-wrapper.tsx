"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel?: React.ReactNode;
  backButtonLabel?: React.ReactNode;
  backButtonHref?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  showCloseButton?: boolean;
  rightButtonLabel?: string; 
  onRightButtonClick?: () => void;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref = "/",
  showHeader = true,
  showFooter = true,
  showCloseButton = true,
  rightButtonLabel,
  onRightButtonClick,
}: CardWrapperProps) => {
  return (
    <div className="flex justify-center items-start bg-white min-h-screen">
      <div
        className="flex flex-col border max-w-md w-full bg-white min-h-screen flex-grow"
        style={{ border: "2px solid #d4d4d4" }}
      >
        {/* Header */}
        {showHeader && (
          <div
            className="flex justify-between items-center border-b border-gray-400 p-4"
            style={{ borderBottom: "2px solid #d4d4d4" }}
          >
            {backButtonLabel && (
              <Link href={backButtonHref} className="text-xl">
                {backButtonLabel}
              </Link>
            )}
            <h2 className="text-lg flex-grow text-center font-semibold">
              {headerLabel}
            </h2>
            {showCloseButton ? (
              <Link href="/auth/login" className="text-xl">
                ✖
              </Link>
            ) : rightButtonLabel && onRightButtonClick ? (
              <button onClick={onRightButtonClick} className="text-black font-bold">
                {rightButtonLabel}
              </button>
            ) : null}
          </div>
        )}

        {/* Content */}
        <Card className="w-full flex-grow">
          <CardContent
            style={{
              maxHeight: "520px",
              overflowY: "scroll",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {children}
          </CardContent>
        </Card>

        {/* Footer */}
        {showFooter && (
          <footer
            className="flex justify-around w-full p-4 mt-auto"
            style={{ marginTop: "auto", borderTop: "2px solid #d4d4d4" }}
          >
            <Link
              href="/homepage"
              className="nav-link flex flex-col items-center"
              style={{ width: "70px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
              <span className="text-sm">Home</span>
            </Link>

            <Link
              href="/bookings"
              className="nav-link flex flex-col items-center"
              style={{ width: "70px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-calendar-event"
                viewBox="0 0 16 16"
              >
                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span className="text-sm">Bookings</span>
            </Link>

            <Link
              href="/mydata"
              className="nav-link flex flex-col items-center"
              style={{ width: "70px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              </svg>
              <span className="text-sm">My Data</span>
            </Link>
          </footer>
        )}
      </div>
    </div>
  );
};
