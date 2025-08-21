// app/api/students/route.ts
import { NextResponse } from 'next/server';
import { students } from '@/app/api/students/data'; // Assuming you have a data file with student data

export async function GET() {
  return NextResponse.json(students);
}