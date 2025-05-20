import { model, Schema } from "mongoose";
import validator from "validator";
import {
  StudenetModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from "./student.interface";

// User Name Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [5, "Must be at least 6, got {VALUE}"],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE is not in capitalize format",
    },
    maxlength: [12, "Must be at least 12, got {VALUE}"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    validate: {
      validator: (value: string) => validator.isAlphanumeric(value),
      message: "{VALUE} is note valid",
    },
  },
});

// Guardian Schema
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fathercontactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  mothercontactN: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

// Local Guardian Schema
const localGuardianSchema = new Schema<TLocalGuardian>({
  Name: {
    type: String,
    required: [true, "Local guardian's name is required"],
  },
  Occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Student ID is required"],
  },
  Address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

// Student Schema
const studentSchema = new Schema<TStudent, StudenetModel>({
  // const studentSchema = new Schema<TStudent, StudenetModel, StudentMethods>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, "Student name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "other"],
      message: "{VALUE} is not a valid gender",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of birth is required"],
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    validate: (value: string) => validator.isEmail(value),
    message: "{VALUE} is not valid",
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  emergencycontactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloogGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      message: "{VALUE} is not a valid blood group",
    },
    required: [true, "Blood group is required"],
  },
  presetAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  pemanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImage: {
    type: String,
    validate: {
      validator: function (v) {
        const sizeInBytes = Buffer.byteLength(v, "base64");
        return sizeInBytes <= 50 * 1024;
      },
      message: "Image exceeds 50 KB limit",
    },
  },
  isActive: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
});

// studentSchema.static.isUserExits = async function (id: string){
//     const existingUser = await Student.findOne({id})
//     return existingUser;
// }

// studentSchema.statics.isUserExists = async function (id: string): Promise<TStudent | null> {
//   return this.findOne({ id });
// };
studentSchema.statics.isUserExits = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

// studentSchema.methods.iUserExits=async function(id :string) {
//   const existingUser = await Student.findOne({id})
//   return existingUser;
// }
// // Export model
export const Student = model<TStudent, StudenetModel>("Student", studentSchema);
