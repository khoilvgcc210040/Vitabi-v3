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
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Card Container */}
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md w-full bg-white">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Link href={backButtonHref} className="text-2xl">
            {backButtonLabel}
          </Link>
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button className="text-2xl">×</button>
        </div>

        {/* Avatar Image */}
        <div className="flex justify-center mt-6 mb-6">
          <img src="/your-avatar-image-path" alt="avatar" className="w-20 h-20" />
        </div>

        {/* Card */}
        <Card className="w-full">
          <CardHeader></CardHeader>
          <CardContent>{children}</CardContent>
          {showSocial && (
            <CardFooter className="flex justify-center mt-4">
              {/* Nếu cần thêm nội dung footer */}
            </CardFooter>
          )}
        </Card>

        <footer className="flex justify-around w-full bg-gray-100 py-4 mt-6 rounded-lg">
          <Link href="/">Home</Link>
          <Link href="/bookings">Bookings</Link>
          <Link href="/mydata">My Data</Link>
        </footer>
      </div>
    </div>
  );
};
