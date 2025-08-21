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
import { Badge } from "@/components/ui/badge"

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
        accessorKey: "rollNo",
        header: "Roll No",
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
        accessorKey: "Status",
        cell: ({ row }) => {
            const student = row.original

            return (
                <div className="flex gap-2">
                    <Badge variant={"destructive"}>Present</Badge>
                    
                </div>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const student = row.original

            return (
                <div className="flex gap-2">
                    <Button size={"sm"}>Present</Button>
                    <Button size={"sm"}>Absent</Button>
                    <Button size={"sm"}>Excused</Button>
                </div>
            )
        },
    },

    
    
   
    
   

    
]