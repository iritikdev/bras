'use client'
import React, { useState } from 'react'
import { columns, Student } from './column'
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [filtered, setFiltered] = useState(students)
  console.log("Students:", students)
  React.useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch('/api/students');
      const data = await res.json();
      setStudents(data);
      setLoading(false);
    };

    fetchStudents();

    setFiltered(
      students.filter(
        s =>
          s.studentName.toLowerCase().includes(search.toLowerCase()) ||
          s.fatherName.toLowerCase().includes(search.toLowerCase()) ||
          s.class.toLowerCase().includes(search.toLowerCase()) ||
          s.rollNo.toString().includes(search)
      )
    )
  }, [students,search ]);

  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <Input
          placeholder="Search students..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-72"
        />
        <Button
          className="w-full md:w-auto"
          onClick={() => alert("Add Student functionality goes here")}
        >
          Add Student
        </Button>
      </div>
      {loading ? "Loading..." : <DataTable columns={columns} data={filtered} />}
    </div>
  )
}
