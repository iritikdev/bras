import { email, z } from "zod"

export const studentSchema = z.object({
  studentName: z.string().min(2),
  fatherName: z.string().min(2),
  motherName: z.string().min(2),
  dob: z.string().refine(val => !isNaN(Date.parse(val)), "Invalid date"),
  aadhaar: z.string().regex(/^\d{12}$/, "Must be 12 digits"),
  photo: z.string().url(),
  email: email().optional(),
  mobile: z.string().regex(/^\d{10}$/, "Must be 10 digits"),

  addressLine: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  district: z.string().min(2),
  pincode: z.string().regex(/^\d{6}$/),

  accountHolder: z.string().min(2),
  accountNo: z.string().regex(/^\d{9,18}$/),
  ifsc: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/),
  accountOf: z.enum(["self", "mother", "father"]),


  previousSchool: z.string().min(2),
  lastClass: z.string().min(1),
  tcNumber: z.string().min(2)
})