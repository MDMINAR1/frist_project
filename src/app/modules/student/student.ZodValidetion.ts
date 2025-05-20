import { z } from "zod";

// UserName Schema
const userNameZodValidetionSchema = z.object({
  firstName: z
    .string()
    .min(6, "Must be at least 6 characters")
    .max(12, "Must be at most 12 characters")
    .trim()
    .refine(
      (val) => val.charAt(0) === val.charAt(0).toUpperCase(),
      "First name must be capitalized",
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .refine(
      (val) => /^[a-z0-9]+$/i.test(val),
      "Last name must be alphanumeric",
    ),
});

// Guardian Schema
const guardianZodValidetionSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  fatherOccupation: z.string().min(1, "Father's occupation is required"),
  fathercontactNo: z.string().min(1, "Father's contact number is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  motherOccupation: z.string().min(1, "Mother's occupation is required"),
  mothercontactN: z.string().min(1, "Mother's contact number is required"),
});

// Local Guardian Schema
const localGuardianZodValidetionSchema = z.object({
  Name: z.string().min(1, "Local guardian's name is required"),
  Occupation: z.string().min(1, "Local guardian's occupation is required"),
  contactNo: z.string().min(1, "Contact number is required"),
  Address: z.string().min(1, "Local guardian's address is required"),
});

// Student Schema
export const studentZodValidetionSchema = z.object({
  id: z.string().min(1, "Student ID is required"),
  name: userNameZodValidetionSchema,
  gender: z.enum(["male", "female", "other"]),
  dateOfBirth: z.string().min(1, "Date of birth is required"), // You can use Zod.date() if it's a Date object
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email address is required"),
  contactNo: z.string().min(1, "Contact number is required"),
  emergencycontactNo: z.string().min(1, "Emergency contact number is required"),
  bloogGroup: z.enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]),
  presetAddress: z.string().min(1, "Present address is required"),
  pemanentAddress: z.string().min(1, "Permanent address is required"),
  guardian: guardianZodValidetionSchema,
  localGuardian: localGuardianZodValidetionSchema,
  profileImage: z
    .string()
    .optional()
    .refine(
      (val) => !val || Buffer.byteLength(val, "base64") <= 50 * 1024,
      "Image exceeds 50 KB limit",
    ),
  isActive: z.enum(["active", "blocked"]).default("active"),
});
export default studentZodValidetionSchema;
