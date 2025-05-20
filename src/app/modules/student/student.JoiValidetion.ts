import Joi from "joi";

export const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "string.base": "Student ID must be a string",
    "any.required": "Student ID is required",
  }),
  name: Joi.object({
    firstName: Joi.string()
      .min(5)
      .max(12)
      .trim()
      .pattern(/^[A-Z][a-zA-Z]*$/, "capitalize")
      .required()
      .messages({
        "string.base": "First name must be a string",
        "string.min": "First name must be at least 5 characters",
        "string.max": "First name must be at most 12 characters",
        "string.pattern.name": "First name must start with a capital letter",
        "any.required": "First name is required",
      }),
    middleName: Joi.string().optional(),
    lastName: Joi.string().alphanum().required().messages({
      "string.alphanum": "Last name must be alphanumeric",
      "any.required": "Last name is required",
    }),
  }).required(),

  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.only": "Gender must be one of 'male', 'female', or 'other'",
    "any.required": "Gender is required",
  }),

  dateOfBirth: Joi.string().required().messages({
    "any.required": "Date of birth is required",
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),

  contactNo: Joi.string().required().messages({
    "any.required": "Contact number is required",
  }),

  emergencycontactNo: Joi.string().required().messages({
    "any.required": "Emergency contact number is required",
  }),

  bloogGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")
    .required()
    .messages({
      "any.only": "Blood group must be a valid type",
      "any.required": "Blood group is required",
    }),

  presetAddress: Joi.string().required().messages({
    "any.required": "Present address is required",
  }),

  pemanentAddress: Joi.string().required().messages({
    "any.required": "Permanent address is required",
  }),

  guardian: Joi.object({
    fatherName: Joi.string().required().messages({
      "any.required": "Father's name is required",
    }),
    fatherOccupation: Joi.string().required().messages({
      "any.required": "Father's occupation is required",
    }),
    fathercontactNo: Joi.string().required().messages({
      "any.required": "Father's contact number is required",
    }),
    motherName: Joi.string().required().messages({
      "any.required": "Mother's name is required",
    }),
    motherOccupation: Joi.string().required().messages({
      "any.required": "Mother's occupation is required",
    }),
    mothercontactN: Joi.string().required().messages({
      "any.required": "Mother's contact number is required",
    }),
  }).required(),

  localGuardian: Joi.object({
    Name: Joi.string().required().messages({
      "any.required": "Local guardian's name is required",
    }),
    Occupation: Joi.string().required().messages({
      "any.required": "Local guardian's occupation is required",
    }),
    contactNo: Joi.string().required().messages({
      "any.required": "Local guardian's contact number is required",
    }),
    Address: Joi.string().required().messages({
      "any.required": "Local guardian's address is required",
    }),
  }).required(),

  profileImage: Joi.string()
    .base64()
    .custom((value, helpers) => {
      const sizeInBytes = Buffer.byteLength(value, "base64");
      if (sizeInBytes > 50 * 1024) {
        return helpers.message("Image exceeds 50 KB limit");
      }
      return value;
    })
    .optional(),

  isActive: Joi.string().valid("active", "blocked").default("active"),
});
export default studentValidationSchema;
