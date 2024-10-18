"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      {/* Card Container */}
      <div className="flex flex-col justify-between border border-gray-300 shadow-lg p-6 max-w-md w-full bg-white h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Link href={backButtonHref} className="text-xl">
            {backButtonLabel}
          </Link>
          <h2 className="text-md font-semibold">{headerLabel}</h2>
          <button className="text-xl">×</button>
        </div>

        {/* Avatar Image */}
        <div className="flex justify-center mt-4 mb-6">
          <img src="/your-avatar-image-path" alt="avatar" className="w-20 h-28 object-contain" />
        </div>

        {/* Card */}
        <Card className="w-full flex-grow">
          <CardHeader></CardHeader>
          <CardContent>{children}</CardContent>
          {showSocial && (
            <CardFooter className="flex justify-center mt-4">
              {/* Nếu cần thêm nội dung footer */}
            </CardFooter>
          )}
        </Card>

        {/* Footer nằm trong khung */}
        <footer className="flex justify-around w-full bg-gray-100 py-4 mt-6 rounded-lg">
          <Link href="/" className="text-sm">Home</Link>
          <Link href="/bookings" className="text-sm">Bookings</Link>
          <Link href="/mydata" className="text-sm">My Data</Link>
        </footer>
      </div>
    </div>
  );
};