"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <div className="flex justify-center items-start bg-white">
      {/* Card Container */}
      <div className="flex flex-col border-t border-l border-r p-6 max-w-md w-full bg-white" style={{ height: '695px' }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-400 pb-4">
          <Link href={backButtonHref} className="text-xl">
            {backButtonLabel}
          </Link>
          <h2 className="text-md font-semibold">{headerLabel}</h2>
          <button className="text-xl">×</button>
        </div>

        {/* Avatar Image */}
        <div className="flex justify-center mt-6 mb-6">
          <img src="/images/logo.png" alt="avatar" className="w-20 h-20 object-contain" />
        </div>

        {/* Card */}
        <div className="flex-grow">
          <Card className="w-full">
            <CardContent>{children}</CardContent>
          </Card>
        </div>

        {/* Footer luôn nằm trong khung */}
        <footer className="flex justify-around w-full bg-gray-100 py-4 mt-4 rounded-lg">
          <Link href="/" className="text-sm">Home</Link>
          <Link href="/bookings" className="text-sm">Bookings</Link>
          <Link href="/mydata" className="text-sm">My Data</Link>
        </footer>
      </div>
    </div>
  );
};
