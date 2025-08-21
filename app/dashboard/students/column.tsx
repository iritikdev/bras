"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export interface Student {
    rollNo: string,
    studentName: string,
    fatherName: string,
    class: string,
    admissionSLNo?: string,
    motherName?: string,
    dob?: string,
    address?: string,
    mobile: string,
    aadhaar: string,
    photo?: string
}

export const columns: ColumnDef<Student>[] = [
     {
        accessorKey: "photo",
        header: "Photo",

    },
    {
        accessorKey: "admissionSLNo",
        header: "Admission SL No",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const student = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(student.rollNo.toString())}
                        >
                            Copy Student Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href={`/dashboard/students/${student.rollNo}`}>View student</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit Student</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
    {
        accessorKey: "studentName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Student Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "fatherName",
        header: "Father Name",
    },
    {
        accessorKey: "motherName",
        header: "Mother Name",
    },
    {
        accessorKey: "class",
        header: "Class",
    },
    {
        accessorKey: "rollNo",
        header: "Roll No",
    },

    {
        accessorKey: "mobile",
        header: "Mobile",
    },
    {
        accessorKey: "aadhaar",
        header: "Aadhaar",
    },
   

    
    {
        accessorKey: "dob",
        header: "Date of Birth",
    },
    // {
    //     accessorKey: "address",
    //     header: "Address",
    // }
]