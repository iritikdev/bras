import React from 'react'

const students: Student[] = [
  {
    studentName: "Ravi Kumar",
    fatherName: "Suresh Kumar",
    class: "VII",
    rollNo: 201,
    mobile: "9876543210",
    aadhaar: "1234-5678-9012",
    photo: "https://example.com/photos/ravi.jpg"
  },
  {
    studentName: "Priya Sharma",
    fatherName: "Rajesh Sharma",
    class: "VII",
    rollNo: 202,
    mobile: "9123456780",
    aadhaar: "2345-6789-0123",
    photo: "https://example.com/photos/priya.jpg"
  },
  {
    studentName: "Amit Singh",
    fatherName: "Manoj Singh",
    class: "VII",
    rollNo: 203,
    mobile: "9988776655",
    aadhaar: "3456-7890-1234",
    photo: "https://example.com/photos/amit.jpg"
  },
  {
    studentName: "Neha Verma",
    fatherName: "Anil Verma",
    class: "VII",
    rollNo: 204,
    mobile: "9012345678",
    aadhaar: "4567-8901-2345",
    photo: "https://example.com/photos/neha.jpg"
  },
  {
    studentName: "Arjun Yadav",
    fatherName: "Vikram Yadav",
    class: "VII",
    rollNo: 205,
    mobile: "9090909090",
    aadhaar: "5678-9012-3456",
    photo: "https://example.com/photos/arjun.jpg"
  },
   {
    studentName: "Ravi Kumar",
    fatherName: "Suresh Kumar",
    class: "VII",
    rollNo: 101,
    mobile: "9876543210",
    aadhaar: "1234-5678-9012",
    photo: "https://example.com/photos/ravi.jpg"
  },
  {
    studentName: "Priya Sharma",
    fatherName: "Rajesh Sharma",
    class: "VII",
    rollNo: 102,
    mobile: "9123456780",
    aadhaar: "2345-6789-0123",
    photo: "https://example.com/photos/priya.jpg"
  },
  {
    studentName: "Amit Singh",
    fatherName: "Manoj Singh",
    class: "VII",
    rollNo: 103,
    mobile: "9988776655",
    aadhaar: "3456-7890-1234",
    photo: "https://example.com/photos/amit.jpg"
  },
  {
    studentName: "Neha Verma",
    fatherName: "Anil Verma",
    class: "VII",
    rollNo: 104,
    mobile: "9012345678",
    aadhaar: "4567-8901-2345",
    photo: "https://example.com/photos/neha.jpg"
  },
  {
    studentName: "Arjun Yadav",
    fatherName: "Vikram Yadav",
    class: "VII",
    rollNo: 105,
    mobile: "9090909090",
    aadhaar: "5678-9012-3456",
    photo: "https://example.com/photos/arjun.jpg"
  },
  {
    studentName: "Kajal Mishra",
    fatherName: "Ramesh Mishra",
    class: "VII",
    rollNo: 106,
    mobile: "9871234567",
    aadhaar: "6789-0123-4567",
    photo: "https://example.com/photos/kajal.jpg"
  },
  {
    studentName: "Deepak Thakur",
    fatherName: "Naresh Thakur",
    class: "VII",
    rollNo: 107,
    mobile: "9812345678",
    aadhaar: "7890-1234-5678",
    photo: "https://example.com/photos/deepak.jpg"
  },
  {
    studentName: "Sneha Gupta",
    fatherName: "Pankaj Gupta",
    class: "VII",
    rollNo: 108,
    mobile: "9823456789",
    aadhaar: "8901-2345-6789",
    photo: "https://example.com/photos/sneha.jpg"
  },
  {
    studentName: "Rahul Mehta",
    fatherName: "Sunil Mehta",
    class: "VII",
    rollNo: 109,
    mobile: "9834567890",
    aadhaar: "9012-3456-7890",
    photo: "https://example.com/photos/rahul.jpg"
  },
  {
    studentName: "Anjali Singh",
    fatherName: "Dinesh Singh",
    class: "VII",
    rollNo: 110,
    mobile: "9845678901",
    aadhaar: "0123-4567-8901",
    photo: "https://example.com/photos/anjali.jpg"
  }

]

import { columns, Student } from './column'
import { DataTable } from "./data-table"

// async function getData(): Promise<Student[]> {
//   // Fetch data from your API here.
//   return students
// }

export default async function StudentsPage() {
  // const data = await getData()

  return (
    <div className="container py-10">
      <DataTable columns={columns} data={students} />
    </div>
  )
}
