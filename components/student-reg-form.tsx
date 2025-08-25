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
import { studentSchema } from "./schema";
import { ageCalculator } from "../lib/ageCalc";

type StudentFormData = z.infer<typeof studentSchema>;

export default function StudentRegistrationForm() {
  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const form = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      studentName: "Ritik Kumar",
      fatherName: "Amit Kumar",
      motherName: "Suman Devi",
      dob: "2000-08-07", // YYYY-MM-DD format
      aadhaar: "123456789012",
      photo: "https://dummyimage.com/150x150/000/fff.png&text=Photo",
      email: "ritik.kumar@example.com",
      mobile: "9876543210",
      addressLine: "123, Gandhi Nagar",
      city: "Patna",
      state: "Bihar",
      district: "Patna",
      pincode: "800001",
      accountHolder: "Ritik Kumar",
      accountNo: "123456789012",
      ifsc: "SBIN0001234",
      accountOf: "self", // or "father" / "mother"
      previousSchool: "ABC Public School",
      lastClass: "I", // Default Roman numeral class
      tcNumber: "TC2025-001",
    },
  });

  // ✅ Age calculation function
  const calculateAge = ageCalculator(setAge);

  const onSubmit = (data: StudentFormData) => {
    console.log("Submitted:", data);
    alert("Student registered successfully!");
  };
  const onError = (errors: any) => {
    console.error("❌ Validation Errors:", errors);
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
              <form
                onSubmit={form.handleSubmit(onSubmit, onError)}
                className=""
              >
                <h5 className="mt-10 mb-5 text-2xl font-bold">
                  {" "}
                  Personal Details
                </h5>
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
                          <Input
                            placeholder="Enter student's name"
                            {...field}
                          />
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
                          <Input
                            type="date"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              calculateAge(e.target.value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                        {/* ✅ Show Calculated Age */}
                        {age && (
                          <p className="text-green-700 text-sm">
                            Age: <b>{age.years}</b> years, <b>{age.months}</b>{" "}
                            months, <b>{age.days}</b> days
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
                          <Input
                            maxLength={12}
                            placeholder="12-digit Aadhaar"
                            {...field}
                          />
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
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={(e) => field.onChange(e.target.files)}
                          />
                        </FormControl>
                        <FormDescription>
                          Upload a recent passport-size photo
                        </FormDescription>
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
                          <Input
                            type="email"
                            placeholder="Enter email"
                            {...field}
                          />
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
                          <Input
                            placeholder="10-digit mobile number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <h5 className="mt-10 mb-5 text-2xl font-bold">
                  {" "}
                  Residential Details
                </h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* ---------------- Address ---------------- */}
                  <FormField
                    control={form.control}
                    name="addressLine"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="House No, Street, Locality"
                            {...field}
                          />
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
                      <FormItem className="w-full">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            placeholder="Enter city"
                            {...field}
                          />
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
                      <FormItem className="w-full">
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter state" {...field} />
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
                      <FormItem className="w-full">
                        <FormLabel>District</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl className="w-full">
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select district" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {biharDistricts.map((district) => (
                              <SelectItem key={district} value={district}>
                                {district}
                              </SelectItem>
                            ))}
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
                          <Input placeholder="6-digit pincode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <h5 className="mt-10 mb-5 text-2xl font-bold">
                  Bank Account Details
                </h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ---------------- Account Of ---------------- */}
                  <FormField
                    control={form.control}
                    name="accountOf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Of</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select relation" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {relations.map((relation) => (
                              <SelectItem key={relation} value={relation}>
                                {relation.charAt(0).toUpperCase() +
                                  relation.slice(1)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Account Holder Name ---------------- */}
                  <FormField
                    control={form.control}
                    name="accountHolder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Holder Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter account holder's name"
                            {...field}
                          />
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
                          <Input
                            placeholder="Enter account number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- IFSC Code ---------------- */}
                  <FormField
                    control={form.control}
                    name="ifsc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IFSC Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter IFSC code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <h5 className="mt-10 mb-5 text-2xl font-bold">
                  Previous School Details
                </h5>
                <Separator className="mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* ---------------- Previous School Name ---------------- */}
                  <FormField
                    control={form.control}
                    name="previousSchool"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous School Name (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter previous school name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* ---------------- Last Class Attended ---------------- */}
                  <FormField
                    control={form.control}
                    name="lastClass"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Class Attended</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {grades.map((grade) => (
                              <SelectItem key={grade} value={grade}>
                                {grade}
                              </SelectItem>
                            ))}
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
                        <FormLabel>
                          Transfer Certificate No. (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter TC number" {...field} />
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
