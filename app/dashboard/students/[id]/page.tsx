"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { use } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

export default function StudentDetails({
    params,
}: {
    params: Promise<{ id: string }>
}) {
     const router = useRouter();
    const { id } = use(params)
    const student = {
        school: "54083 - Dr. Bhimrao Ambedkar Residential School, Dhamaura",
        applicationNo: "540830393329",
        apaarId: "—",
        name: "RANJANA KUMARI",
        mother: "TARAMATI DEVI",
        father: "LAKHENDRA URAON",
        email: "KRANJANA00293@GMAIL.COM",
        gender: "FEMALE",
        dob: "10/10/2010",
        mobile: "8235047171",
        aadhar: "9056-6215-0612",
        caste: "Tharu",
        category: "Scheduled Tribe",
        religion: "HINDU",
        maritalStatus: "UNMARRIED",
        area: "RURAL",
        medium: "HINDI",
        nationality: "INDIAN",
        differentlyAbled: "No",
        visuallyImpaired: "No",
        idMark1: "A MOLE ON THE LEFT HAND",
        idMark2: "A MOLE ON THE RIGHT LEG",
        address: "VILL - HATHUVANVA, PO - KUNAI BHELAHI, PS - SEMARA",
        town: "BETTIAH",
        district: "WEST CHAMPARAN",
        pincode: "845105",
        bankName: "—",
        accountNo: "—",
        ifsc: "—",
        photo: "/placeholder/student-photo.png",
        signature: "/placeholder/student-sign.png",
    };

    return (
        <div className=" mx-auto p-6">
             <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Student Details</h1>
      </div>

            <Card className="shadow-lg border rounded-2xl">
                <CardHeader>
                    {/* Header */}
                    <div className="flex items-center justify-between ">
                        <Image src={"/bhimrao-logo.png"} alt="bhimrao" width={75} height={75} />

                        <div className="text-center">
                            <p className="text-sm font-semibold">
                                SC & ST Welfare Department, Government of Bihar
                            </p>
                            <h1 className="text-2xl font-bold mb-1">Dr. Bhimrao Ambedkar Residential School, Dhamaura</h1>
                            <p className="text-sm text-gray-600">
                                📧  bras.dhamaura@gmail.com । 📞  8406908683  | UDISE CODE :- 10011403906 | SCHOOL CODE :- 35376, 54083

                            </p>

                        </div>
                        <Image src={"/bihar-govt-log.png"} alt="bhimrao" width={75} height={75} />
                    </div>
                    
                </CardHeader>
                <Separator />

                <CardContent className="space-y-8">
                    {/* Personal Details */}
                    <section>
                        <h2 className="text-lg font-bold mb-3">1. PERSONAL DETAILS</h2>
                        <div className="flex">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div><strong>Roll No:</strong> {id}</div>
                                <div><strong>School Code & Name:</strong> {student.school}</div>
                                <div><strong>Application No:</strong> {student.applicationNo}</div>
                                <div><strong>Apaar ID:</strong> {student.apaarId}</div>
                                <div><strong>Student PEN No:</strong> {student.apaarId}</div>
                                <div><strong>Student Name:</strong> {student.name}</div>
                                <div><strong>Mother Name:</strong> {student.mother}</div>
                                <div><strong>Father Name:</strong> {student.father}</div>
                                <div><strong>Email:</strong> {student.email}</div>
                                <div><strong>Gender:</strong> {student.gender}</div>
                                <div><strong>Date of Birth:</strong> {student.dob}</div>
                                <div><strong>Age:</strong> {student.dob}</div>
                                <div><strong>Mobile No:</strong> {student.mobile}</div>
                                <div><strong>Aadhar No:</strong> {student.aadhar}</div>
                                <div><strong>Category:</strong> {student.caste}</div>
                                <div><strong>Caste:</strong> {student.category}</div>
                                <div><strong>Religion:</strong> {student.religion}</div>
                                <div><strong>Marital Status:</strong> {student.maritalStatus}</div>
                                <div><strong>Area:</strong> {student.area}</div>
                                <div><strong>Medium:</strong> {student.medium}</div>
                                <div><strong>Nationality:</strong> {student.nationality}</div>
                                <div><strong>Differently Abled:</strong> {student.differentlyAbled}</div>
                                <div><strong>Visually Impaired:</strong> {student.visuallyImpaired}</div>
                                <div><strong>Identification Mark 1:</strong> {student.idMark1}</div>
                                <div><strong>Identification Mark 2:</strong> {student.idMark2}</div>

                            </div>
                            <div className="pr-4">
                                <Image className="border-2 border-black" src={"/student.png"} alt="" width={120} height={120}/>

                            </div>

                        </div>


                    </section>

                    <Separator />

                    {/* Address Details */}
                    <section>
                        <h2 className="text-lg font-bold mb-3">2. ADDRESS DETAILS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div><strong>Address:</strong> {student.address}</div>
                            <div><strong>Town / City:</strong> {student.town}</div>
                            <div><strong>District:</strong> {student.district}</div>
                            <div><strong>Pincode:</strong> {student.pincode}</div>
                        </div>
                    </section>

                    <Separator />

                    {/* Bank Details */}
                    <section>
                        <h2 className="text-lg font-bold mb-3">3. BANK DETAILS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div><strong>Bank Name:</strong> {student.bankName}</div>
                            <div><strong>Student A/C No.:</strong> {student.accountNo}</div>
                            <div><strong>IFSC Code:</strong> {student.ifsc}</div>
                        </div>
                    </section>
                    <Separator />
                    {/* Previous School Details */}
          <section>
            <h2 className="text-lg font-bold mb-3">4. PREVIOUS SCHOOL DETAILS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Transfer Certificate No:</strong>{" "}
                {"TC-123456"}
              </div>
              <div>
                <strong>TC Date:</strong>{" "}
                {"01/01/2023"}
              </div>
              <div>
                <strong>School Name:</strong> "Dr. Bhimrao Ambedkar Residential School, Dhamaura"
              </div>
              <div>
                <strong>Class:</strong> {"7th"}
              </div>
            </div>
          </section>
                </CardContent>
            </Card>
            <div className="flex justify-center mt-6 gap-4">
                <Button
                    onClick={() => window.print()}

                >
                    Print Student Details
                </Button>
                <Button
                    onClick={() => window.print()}
                    variant={"secondary"}

                >
                    Download Student Details
                </Button>
            </div>
        </div>
    );
}
