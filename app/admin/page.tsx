"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import {
  CircleUser,
  BarChart,
  Calendar,
  Building,
  Clock,
  Camera,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import AdminSearch from "@/components/features/admin-search";
import TableComponent from "@/components/TableComponent";
import HospitalDetailDialog from "@/components/features/Hospitaldetaildialog";
import EditBookingDialog from "@/components/features/Hospitalupdatedialog";

interface BookingData {
  id: number;
  hospital: string;
  appointmentDate: string;
  appointmentStartTime: string;
  appointmentEndTime: string;
  appointmentTime: string;
  insurance: string;
  contactNumber: string;
  address: string;
  country: string;
  workingHours: string[];
  user: {
    name: string;
    gender: string;
    birthday: string;
    email: string;
    phone: string;
  };
  requestedDate: string;
  preferredDate: string;
}

const menuItems = [
  { icon: BarChart, label: "Statistical Analysis", section: "STATISCALS" },
  {
    icon: Calendar,
    label: "Appointment Approval",
    section: "APPOINTMENTS MANAGEMENT",
  },
  {
    icon: Building,
    label: "Hospitals",
    section: "RESOURCES",
    path: "/HospitalList",
  },
  { icon: Clock, label: "Working Hours", section: "RESOURCES",  path: "/WorkingHoursList",},
  { icon: Camera, label: "Hospital Images", section: "RESOURCES", path: "/HospitalImagesList" },
  { icon: Globe, label: "Distance Info", section: "RESOURCES", path: "/DistanceInfo" },
];


const initialData = {
  appointments: [
    {
      date: "09/20",
      id: 400,
      hospital: "Alliance International Medical Centre",
      country: "Laos",
      phone: "021-513095",
      symptom: "1",
      duration: "1",
      preferredDate1: "2024/09/20 10:44~12:44",
      preferredDate2: "",
      insurance: "No coverage",
      status: "Waiting",
      appointmentTime: "2024/09/20 10:44~12:44",
      contactNumber: "021-513095",
      address: "Souphanouvong Rd, Vientiane, Laos",
      workingHours: [
        "Monday: 00:00 - 23:59",
        "Tuesday: 00:00 - 23:59",
        "Wednesday: 00:00 - 23:59",
        "Thursday: 00:00 - 23:59",
        "Friday: 00:00 - 23:59",
        "Saturday: 00:00 - 23:59",
        "Sunday: 00:00 - 23:59",
      ],
      user: {
        name: "LIEU KHOI",
        gender: "Male",
        birthday: "Sept. 3, 2024",
        email: "thucnoi.3535@gmail.com",
        phone: "+81-324567",
      },
      requestedDate: "2024/09/20",
      preferredDate: "2024/09/20 10:44~12:44",
    },
    {
      date: "07/15",
      id: 133,
      hospital: "Raffles Medical International Clinic in Hanoi",
      country: "Vietnam",
      phone: "1900-545-5",
      symptom: "1",
      duration: "1",
      preferredDate1: "2024/07/09 11:45~13:45",
      preferredDate2: "",
      insurance: "Sompo Japan",
      status: "Approved",
      appointmentTime: "2024/07/09 11:45~13:45",
      contactNumber: "1900-545-5",
      address: "Hanoi, Vietnam",
      workingHours: [
        "Monday: 08:00 - 20:00",
        "Tuesday: 08:00 - 20:00",
        "Wednesday: 08:00 - 20:00",
        "Thursday: 08:00 - 20:00",
        "Friday: 08:00 - 20:00",
      ],
      user: {
        name: "LIEU KHOI",
        gender: "Male",
        birthday: "Sept. 3, 2024",
        email: "thucnoi.3535@gmail.com",
        phone: "+81-324567",
      },
      requestedDate: "2024/07/09",
      preferredDate: "2024/07/09 11:45~13:45",
    },
    {
      date: "07/28",
      id: 136,
      hospital: "Columbia Asia International Hospital - Gia Dinh",
      country: "Vietnam",
      phone: "028-3803-0678",
      symptom: "1",
      duration: "1",
      preferredDate1: "2024/07/29 00:07~02:07",
      preferredDate2: "",
      insurance: "HS Insurance",
      status: "Rejected",
      appointmentTime: "2024/07/29 00:07~02:07",
      contactNumber: "028-3803-0678",
      address: "Ho Chi Minh City, Vietnam",
      workingHours: [
        "Monday: 08:00 - 20:00",
        "Tuesday: 08:00 - 20:00",
        "Wednesday: 08:00 - 20:00",
        "Thursday: 08:00 - 20:00",
        "Friday: 08:00 - 20:00",
      ],
      user: {
        name: "LIEU KHOI",
        gender: "Male",
        birthday: "Sept. 3, 2024",
        email: "thucnoi.3535@gmail.com",
        phone: "+81-324567",
      },
      requestedDate: "2024/07/29",
      preferredDate: "2024/07/29 00:07~02:07",
    },
  ],
};

const transformedAppointments = initialData.appointments.map((appointment) => {
  const [appointmentDate, timeRange] = appointment.appointmentTime.split(" ");
  const [appointmentStartTime, appointmentEndTime] = timeRange.split("~");

  return {
    ...appointment,
    appointmentDate,
    appointmentStartTime,
    appointmentEndTime,
    workingHours: appointment.workingHours.join(", "),
  };
});

const Dashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("appointments");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("All");
  const getFilteredAppointments = () => {
    if (filterStatus === "All") return transformedAppointments;
    return transformedAppointments.filter(
      (appointment) => appointment.status === filterStatus
    );
  };

  const handleMenuClick = (label: string, path?: string) => {
    if (path) {
      router.push(path); // Điều hướng đến trang mới
    } else {
      setActiveTab(label.toLowerCase());
    }
  };

  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(null);

  const handleDetailClick = (row: Record<string, unknown>) => {
    const booking: BookingData = {
      id: row.id as number,
      hospital: row.hospital as string,
      appointmentDate: row.appointmentDate as string,
      appointmentStartTime: row.appointmentStartTime as string,
      appointmentEndTime: row.appointmentEndTime as string,
      insurance: row.insurance as string,
      contactNumber: row.contactNumber as string,
      address: row.address as string,
      country: row.country as string,
      workingHours: (row.workingHours as string).split(", "),
      user: row.user as {
        name: string;
        gender: string;
        birthday: string;
        email: string;
        phone: string;
      },
      requestedDate: row.requestedDate as string,
      preferredDate: row.preferredDate as string,
      appointmentTime: "",
    };

    setSelectedBooking(booking);
    setIsDialogOpen(true);
  };

  const handleSaveChanges = (updatedData: Partial<BookingData>) => {
    const completeData: BookingData = {
      id: updatedData.id || selectedBooking?.id || 0,
      hospital: updatedData.hospital || selectedBooking?.hospital || "",
      appointmentDate: updatedData.appointmentDate || selectedBooking?.appointmentDate || "",
      appointmentStartTime: updatedData.appointmentStartTime || selectedBooking?.appointmentStartTime || "",
      appointmentEndTime: updatedData.appointmentEndTime || selectedBooking?.appointmentEndTime || "",
      appointmentTime: updatedData.appointmentTime || selectedBooking?.appointmentTime || "",
      insurance: updatedData.insurance || selectedBooking?.insurance || "",
      contactNumber: updatedData.contactNumber || selectedBooking?.contactNumber || "",
      address: updatedData.address || selectedBooking?.address || "",
      country: updatedData.country || selectedBooking?.country || "",
      workingHours: updatedData.workingHours || selectedBooking?.workingHours || [],
      user: updatedData.user || selectedBooking?.user || {
        name: "",
        gender: "",
        birthday: "",
        email: "",
        phone: "",
      },
      requestedDate: updatedData.requestedDate || selectedBooking?.requestedDate || "",
      preferredDate: updatedData.preferredDate || selectedBooking?.preferredDate || "",
    };

    console.log("Save changes:", completeData);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 dark:bg-gray-900 dark:text-white md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <h2 className="text-xl font-bold p-4">VITABI</h2>
          <nav className="px-4 space-y-1">
            {menuItems.map(({ icon: Icon, label, section, path }, idx) => (
              <div key={idx}>
                {idx === 0 || menuItems[idx - 1].section !== section ? (
                  <h3 className="text-gray-500 uppercase mt-4 mb-2">
                    {section}
                  </h3>
                ) : null}
                <button
                  className={`flex items-center gap-3 px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    activeTab === label.toLowerCase()
                      ? "bg-gray-800 text-white"
                      : ""
                  }`}
                  onClick={() => handleMenuClick(label, path)}

                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              </div>
            ))}
          </nav>
          <footer className="mt-auto p-4">
            <p className="text-sm">Logged in as: khoivl.net@gmail.com</p>
          </footer>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 dark:bg-gray-900 dark:text-white">
          <div className="flex-1 max-w-lg">
            <AdminSearch onSearch={(query) => setSearchQuery(query)} />
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 dark:bg-gray-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-4">List of Appointments</h2>
          <div className="flex gap-2 mb-4">
            {[
              { label: "All", count: transformedAppointments.length },
              { label: "Pending", count: transformedAppointments.filter((a) => a.status === "Pending").length },
              { label: "Approved", count: transformedAppointments.filter((a) => a.status === "Approved").length },
              { label: "Canceled", count: transformedAppointments.filter((a) => a.status === "Canceled").length },
              { label: "Rejected", count: transformedAppointments.filter((a) => a.status === "Rejected").length },
              { label: "Done", count: transformedAppointments.filter((a) => a.status === "Done").length },
            ].map((filter, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 border rounded-lg ${filterStatus === filter.label ? "bg-gray-400 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                onClick={() => setFilterStatus(filter.label)}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
          <TableComponent
            title="Appointment Data"
            description="List of Appointments"
            columns={[
              "Date",
              "ID",
              "Hospital",
              "Country",
              "Hospital Phone",
              "Symptom",
              "Duration",
              "1st Preferred Date/Times",
              "2nd Preferred Date/Times",
              "Insurance",
              "Status",
            ]}
            rows={getFilteredAppointments()}
            searchQuery={searchQuery}
            selectable={false}
            onEdit={handleDetailClick}
            onDelete={(row) => {
              setSelectedBooking(row as unknown as BookingData);
              setIsEditDialogOpen(true);
            }}
          />
        </main>
      </div>
      {isDialogOpen && selectedBooking && (
        <HospitalDetailDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          bookingData={selectedBooking}
        />
      )}
      {isEditDialogOpen && selectedBooking && (
        <EditBookingDialog
          isOpen={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          bookingData={selectedBooking}
          onSave={(updatedData) => {
            handleSaveChanges(updatedData);
            setIsEditDialogOpen(false);
          }}
          onCancel={() => {
            console.log("Appointment canceled");
            setIsEditDialogOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
