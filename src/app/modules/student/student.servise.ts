
import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const creatStudentIntoDB = async (studentData: TStudent) => {


  if (await Student.isUserExits(studentData.id)) {
      throw new Error('User already eists casm')
  }
  const result = await Student.create(studentData);
  // const result = await Student.create(student);

  // const student = new Student(studentData);
  // if (await Student.isUserExists(studentData.id)) {
  // //   throw new Error('User already eists')
  // // }
  // const result = await student.save();
  return result;
};

const GetAllStudentFromeDB = async () => {
  const result = await Student.find();
  return result;
};
const GetSingleStudentFromeDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  creatStudentIntoDB,
  GetAllStudentFromeDB,
  GetSingleStudentFromeDB,
};
