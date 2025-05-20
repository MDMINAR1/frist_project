import { Request, Response } from "express";
import { StudentServices } from "./student.servise";
// import studentValidationSchema from "./student.JoiValidetion";
import studentZodValidetionSchema from "./student.ZodValidetion";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // const { error ,value } = studentValidationSchema.validate(studentData);
    const ZodValidationSchema = studentZodValidetionSchema.parse(studentData);

    const result =
      await StudentServices.creatStudentIntoDB(ZodValidationSchema);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: " somthing went wrong",
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      massage: " Student is created succesflly",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || " somthing went wrong",
      error: err,
    });
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
