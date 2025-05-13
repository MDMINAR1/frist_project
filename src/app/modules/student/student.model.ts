import { model, Schema } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, require: true },
  middleName: { type: String },
  lastName: { type: String, require: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, require: true },
  fatherOccupation: { type: String, require: true },
  fathercontactNo: { type: String, require: true },
  motherName: { type: String, require: true },
  motherOccupation: { type: String, require: true },
  mothercontactN: { type: String, require: true },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  Name: { type: String, require: true },
  Occupation: { type: String, require: true },
  contactNo: { type: String, require: true },
  Address: { type: String, require: true },
});

// 2. Create a Schema corresponding to the document interface.
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, require: true },
  emergencycontactNo: { type: String, require: true },
  bloogGroup: ["A+", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  presetAddress: { type: String },
  pemanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: { type: String },
  isActive: ["active", "blocked"],
});

// 3. Create a Model.
export const StudentModel = model<Student>("Student", studentSchema);
