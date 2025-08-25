import { email, z } from "zod";
import { biharDistricts, grades, relations } from "./data";

// ✅ Zod Schema for Validation
export const studentSchema = z.object({
  studentName: z.string().min(3, "Student name is required"),
  fatherName: z.string().min(3, "Father's name is required"),
  motherName: z.string().min(3, "Mother's name is required"),
  dob: z.string().nonempty("Date of birth is required"),
  aadhaar: z.string().regex(/^\d{12}$/, "Aadhaar must be 12 digits"),
  photo: z
    .any()
    .refine((files) => files?.length === 1, "Please upload a photo")
    .optional(),

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
  // previousSchoolAddress: z.string(),
  lastClass: z.enum(grades),
  tcNumber: z.string().optional(),
});
