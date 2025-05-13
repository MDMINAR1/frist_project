import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const creatStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const GetAllStudentFromeDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const GetSingleStudentFromeDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  creatStudentIntoDB,
  GetAllStudentFromeDB,
  GetSingleStudentFromeDB,
};
