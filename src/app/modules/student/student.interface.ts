export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fathercontactNo: string;
  motherName: string;
  motherOccupation: string;
  mothercontactN: string;
};

export type LocalGuardian = {
  Name: string;
  Occupation: string;
  contactNo: string;
  Address: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// 1. Create an interface representing a document in MongoDB.
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencycontactNo: string;
  bloogGroup?: "A+" | "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presetAddress: string;
  pemanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "blocked";
};
