import { Request, Response } from "express";
import { StudentServices } from "./student.servise";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.creatStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      massage: " Student is created succesflly",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.GetAllStudentFromeDB();
    res.status(200).json({
      success: true,
      massage: " Students are retrieved succesflly",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.GetSingleStudentFromeDB(studentId);
    res.status(200).json({
      success: true,
      massage: " Students are retrieved succesflly",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
