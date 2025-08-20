"use client"

import * as React from "react"


import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  
  Users,
  GraduationCap,
  
  Calendar,
  ClipboardCheck,
  FileText,
  Wallet,
  Library,
  Bus,
  Building,
  Megaphone,
  BarChart2,
  Settings,
  Shield,
  SquareTerminal,
  BookOpen,
  Command,
  LifeBuoy,
  Send,
  

} from "lucide-react"

export const data = {
  user: {
    name: "Ritik Kumar",
    email: "ritik@example.com",
    avatar: "/avatars/user.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Overview", url: "#" },
        { title: "Upcoming Events", url: "#" },
        { title: "Notifications", url: "#" },
      ],
    },
    {
      title: "Student Management",
      url: "#",
      icon: Users,
      items: [
        { title: "Add Student", url: "#" },
        { title: "View / Edit Students", url: "#" },
        { title: "Promote Students", url: "#" },
        { title: "Admissions", url: "#" },
        { title: "Generate ID Cards", url: "#" },
      ],
    },
    {
      title: "Staff Management",
      url: "#",
      icon: GraduationCap,
      items: [
        { title: "Add Teacher", url: "#" },
        { title: "View / Edit Teachers", url: "#" },
        { title: "Assign Classes & Subjects", url: "#" },
        { title: "Non-Teaching Staff", url: "#" },
        { title: "Staff ID Cards", url: "#" },
      ],
    },
    {
      title: "Class Management",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "Manage Classes", url: "#" },
        { title: "Manage Sections", url: "#" },
        { title: "Assign Class Teachers", url: "#" },
        { title: "Subjects", url: "#" },
        { title: "Timetable", url: "#" },
      ],
    },
    {
      title: "Attendance Management",
      url: "#",
      icon: ClipboardCheck,
      items: [
        { title: "Student Attendance", url: "#" },
        { title: "Teacher Attendance", url: "#" },
        { title: "Attendance Reports", url: "#" },
      ],
    },
    {
      title: "Examination & Results",
      url: "#",
      icon: FileText,
      items: [
        { title: "Schedule Exams", url: "#" },
        { title: "Manage Exam Types", url: "#" },
        { title: "Enter Marks", url: "#" },
        { title: "View Results", url: "#" },
        { title: "Generate Report Cards", url: "#" },
        { title: "Performance Analytics", url: "#" },
      ],
    },
    {
      title: "Fees & Accounts",
      url: "#",
      icon: Wallet,
      items: [
        { title: "Create Fee Structures", url: "#" },
        { title: "Collect Fees", url: "#" },
        { title: "Pending Fees", url: "#" },
        { title: "Payment History", url: "#" },
        { title: "Generate Receipts", url: "#" },
      ],
    },
    {
      title: "Library Management",
      url: "#",
      icon: Library,
      items: [
        { title: "Add / Edit Books", url: "#" },
        { title: "Issue / Return Books", url: "#" },
        { title: "Library Reports", url: "#" },
      ],
    },
    {
      title: "Transport Management",
      url: "#",
      icon: Bus,
      items: [
        { title: "Vehicle Details", url: "#" },
        { title: "Assign Routes", url: "#" },
        { title: "Transport Fee Tracking", url: "#" },
      ],
    },
    {
      title: "Hostel Management",
      url: "#",
      icon: Building,
      items: [
        { title: "Hostel Details", url: "#" },
        { title: "Room Allocation", url: "#" },
        { title: "Hostel Fee Collection", url: "#" },
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: Megaphone,
      items: [
        { title: "Announcements", url: "#" },
        { title: "SMS / Email Notifications", url: "#" },
        { title: "Push Notifications", url: "#" },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: BarChart2,
      items: [
        { title: "Student Reports", url: "#" },
        { title: "Attendance Reports", url: "#" },
        { title: "Fee Reports", url: "#" },
        { title: "Teacher Reports", url: "#" },
        { title: "Academic Performance", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        { title: "General Settings", url: "#" },
        { title: "User Roles & Permissions", url: "#" },
        { title: "Theme & Branding", url: "#" },
        { title: "Change Password", url: "#" },
      ],
    },
    {
      title: "Admin Tools",
      url: "#",
      icon: Shield,
      items: [
        { title: "Backup & Restore", url: "#" },
        { title: "Data Security Settings", url: "#" },
        { title: "Audit Logs", url: "#" },
      ],
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],

  projects: [
    {
      name: "School Website",
      url: "#",
      icon: Calendar,
    },
    {
      name: "Mobile App",
      url: "#",
      icon: Calendar,
    },
  ],
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Dr. B.A.R.S</span>
                  <span className="truncate text-xs">Dhamaura</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
