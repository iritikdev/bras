"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { studentSchema } from "./schema"
import { z } from "zod"
import Webcam from "react-webcam"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import SchoolHeader from "./SchoolHeader"
import Stepper, { Step } from "@/components/ui/Stepper"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select"


type FormData = z.infer<typeof studentSchema>

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [photo, setPhoto] = useState("")
  const webcamRef = React.useRef<Webcam>(null)
  const [accountValue, setAccountValue] = useState("self");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(studentSchema)
  })

  const capturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot()
    if (imageSrc) {
      setPhoto(imageSrc)
      setValue("photo", imageSrc)
    }
  }



  const onSubmit = (data: FormData) => {
    console.log("Final Submission:", data)
    toast("Form submitted successfully!")
  }

  return (
    <div className="p-6">

      <div className="mb-6 border-b-2 pb-6">
        <SchoolHeader />
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step >
              <div className="grid grid-cols-3 gap-6" >

                <div className="mb-2"><Label className="mb-2">Student Name</Label><Input {...register("studentName")} /></div>
                <div><Label className="mb-2">Father Name</Label><Input {...register("fatherName")} /></div>
                <div><Label className="mb-2">Mother Name</Label><Input {...register("motherName")} /></div>
                <div><Label className="mb-2">Date of Birth</Label><Input type="date" {...register("dob")} /></div>
                <div><Label className="mb-2">Aadhaar No.</Label><Input {...register("aadhaar")} maxLength={12} /></div>
                <div><Label className="mb-2">Email</Label><Input {...register("email")} /></div>
                <div><Label className="mb-2">Mobile No.</Label><Input {...register("mobile")} maxLength={10} /></div>


              </div>
            </Step>
            <Step>
              <div className="grid grid-cols-2 gap-6  ">
                <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="
                 rounded-md border-2 h-96 " />      
                <div className="h-full">
                  {photo && <img src={photo} alt="Captured" className="rounded-md" />}
                </div>             
                <Button type="button" onClick={capturePhoto}>Capture</Button>
              </div>
            </Step>
            <Step>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3"><Label className="mb-2">Address Line</Label><Input {...register("addressLine")} /></div>
                <div><Label className="mb-2">City</Label><Input {...register("city")} /></div>
                <div><Label className="mb-2">State</Label><Input {...register("state")} /></div>
                <div><Label className="mb-2">District</Label><Input {...register("district")} /></div>
                <div><Label className="mb-2">Pincode</Label><Input {...register("pincode")} maxLength={6} /></div>
              </div>
            </Step>
            <Step>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <Label>Account Of</Label>
                  <Select onValueChange={(value) => setValue("accountOf", value as "self" | "mother" | "father")} >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select account holder" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self">Self</SelectItem>
                      <SelectItem value="mother">Mother</SelectItem>
                      <SelectItem value="father">Father</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.accountOf && <p className="text-red-500 text-sm">{errors.accountOf.message}</p>}

                </div>

                <div><Label className="mb-2">Account Holder Name</Label><Input {...register("accountHolder")} /></div>
                <div><Label className="mb-2">Account Number</Label><Input {...register("accountNo")} /></div>
                <div><Label className="mb-2">IFSC Code</Label><Input {...register("ifsc")} /></div>
              </div>
            </Step>
            <Step>
              <div className="grid grid-cols-3 gap-6">
                <div><Label className="mb-2">Previous School Name</Label><Input {...register("previousSchool")} /></div>
                <div><Label className="mb-2">Last Class Attended</Label><Input {...register("lastClass")} /></div>
                <div><Label className="mb-2">Transfer Certificate No.</Label><Input {...register("tcNumber")} /></div>
              </div>
            </Step>
          </Stepper>
          {/* <div className="flex justify-between pt-4">

            <Button type="submit">Submit</Button>

          </div> */}
        </form>
      </div>
    </div>
  )
}