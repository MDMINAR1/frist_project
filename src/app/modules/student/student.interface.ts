import { Model } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fathercontactNo: string;
  motherName: string;
  motherOccupation: string;
  mothercontactN: string;
};

export type TLocalGuardian = {
  Name: string;
  Occupation: string;
  contactNo: string;
  Address: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// 1. Create an interface representing a document in MongoDB.
export type TStudent = {
  id: string;
  name: TUserName;
  gender: "male" | "female" | "other";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencycontactNo: string;
  bloogGroup?: "A+" | "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presetAddress: string;
  pemanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
};

export interface StudenetModel extends Model<TStudent> {
  isUserExits(id: string): Promise<TStudent | null>;
}

// export type StudentMethods = {
//   iUserExits(id: string): Promise<TStudent | null>;
// };
// export type StudenetModel = Model<TStudent, {}, StudentMethods>;
