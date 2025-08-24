"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SchoolHeader from "./SchoolHeader";
import { Separator } from "./ui/separator";
import { biharDistricts, grades, relations } from "./data";

// ✅ Zod Schema for Validation
const studentSchema = z.object({
  studentName: z.string().min(3, "Student name is required"),
  fatherName: z.string().min(3, "Father's name is required"),
  motherName: z.string().min(3, "Mother's name is required"),
  dob: z.string().nonempty("Date of birth is required"),
  aadhaar: z.string().regex(/^\d{12}$/, "Aadhaar must be 12 digits"),
  photo: z.any().refine((file) => file?.length === 1, "Photo is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be 10 digits"),
  addressLine: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  district: z.enum(biharDistricts),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
  accountHolder: z.string().min(3, "Account holder name is required"),
  accountNo: z.string().regex(/^\d{9,18}$/, "Account number is invalid"),
  ifsc: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"),
  accountOf: z.enum(relations),

  previousSchool: z.string().optional(),
  previousSchoolAddress: z.string(),
  lastClass: z.enum(grades),
  tcNumber: z.string().optional(),
});

type StudentFormData = z.infer<typeof studentSchema>;

export default function StudentRegistrationForm() {
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const form = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      studentName: "",
      fatherName: "",
      motherName: "",
      dob: "",
      aadhaar: "",
      photo: "",
      email: "",
      mobile: "",
      addressLine: "",
      city: "",
      state: "",
      district: "",
      pincode: "",
      accountHolder: "",
      accountNo: "",
      ifsc: "",
      accountOf: "self",
      previousSchool: "",
      lastClass: "I",
      tcNumber: "",
    },
  });

  // ✅ Age calculation function
  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const onSubmit = (data: StudentFormData) => {
    console.log("Submitted:", data);
    alert("Student registered successfully!");
  };

  return (
    <>
      <SchoolHeader />
      <div className="flex justify-center items-center min-h-screen  p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Student Registration Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <h5 className="mt-10 mb-5 text-2xl font-bold"> Personal Details</h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ---------------- Student Name ---------------- */}
                  <FormField
                    control={form.control}
                    name="studentName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter student's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Father's Name ---------------- */}
                  <FormField
                    control={form.control}
                    name="fatherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Father's Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter father's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Mother's Name ---------------- */}
                  <FormField
                    control={form.control}
                    name="motherName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mother's Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter mother's name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- DOB ---------------- */}
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} onChange={(e) => {
                            field.onChange(e);
                            calculateAge(e.target.value);
                          }} />
                        </FormControl>
                        <FormMessage />
                        {/* ✅ Show Calculated Age */}
                        {age && (
                          <p className="text-green-700 text-sm">
                            Age: <b>{age.years}</b> years, <b>{age.months}</b> months, <b>{age.days}</b> days
                          </p>
                        )}
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Aadhaar ---------------- */}
                  <FormField
                    control={form.control}
                    name="aadhaar"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Aadhaar</FormLabel>
                        <FormControl>
                          <Input maxLength={12} placeholder="12-digit Aadhaar" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Photo ---------------- */}
                  <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Photo</FormLabel>
                        <FormControl>
                          <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files)} />
                        </FormControl>
                        <FormDescription>Upload a recent passport-size photo</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Email ---------------- */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Mobile ---------------- */}
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <h5 className="mt-10 mb-5 text-2xl font-bold"> Residential   Details</h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* ---------------- Address ---------------- */}
                  <FormField
                    control={form.control}
                    name="addressLine"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="House No, Street, Locality" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- City ---------------- */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- State ---------------- */}
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- District ---------------- */}
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>District</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {biharDistricts.map((district) => <SelectItem value={district}>{district}</SelectItem>)}

                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Pincode ---------------- */}
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input maxLength={6} placeholder="6-digit pincode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <h5 className="mt-10 mb-5 text-2xl font-bold"> Bank Account Details</h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ---------------- Account Holder ---------------- */}
                  <FormField
                    control={form.control}
                    name="accountHolder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Holder</FormLabel>
                        <FormControl>
                          <Input placeholder="Account holder name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Account Number ---------------- */}
                  <FormField
                    control={form.control}
                    name="accountNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Account number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- IFSC ---------------- */}
                  <FormField
                    control={form.control}
                    name="ifsc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IFSC Code</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. SBIN0001234" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Account Of ---------------- */}
                  <FormField
                    control={form.control}
                    name="accountOf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Of</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {relations.map((r) => <SelectItem value={r}>{r}</SelectItem>)}

                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <h5 className="mt-10 mb-5 text-2xl font-bold"> Previous School Details</h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ---------------- Previous School ---------------- */}
                  <FormField
                    control={form.control}
                    name="previousSchool"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous School</FormLabel>
                        <FormControl>
                          <Input placeholder="Previous school name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Last Class ---------------- */}
                  <FormField
                    control={form.control}
                    name="lastClass"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Class</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {grades.map((g) => <SelectItem value={g}>{g}</SelectItem>)}


                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- TC Number ---------------- */}
                  <FormField
                    control={form.control}
                    name="tcNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TC Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Transfer Certificate number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* ---------------- Submit Button ---------------- */}
                <div className="md:col-span-2 flex justify-center mt-4">
                  <Button type="submit" className="w-full md:w-1/2 text-lg">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
