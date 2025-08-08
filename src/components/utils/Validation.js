import * as Yup from "yup";

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must be less than or equal to 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .max(50, "Email must be less than or equal to 50 characters")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email format"
    ),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .min(8, "Phone number must be at least 8 characters")
    .max(15, "Phone number cannot be longer than 15 characters"),
  description: Yup.string()
    .required("Message is required")
    .min(5, "Message must be at least 2 characters long"),
});

// PopUp Modal
export const PopUpModalSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must be less than or equal to 50 characters"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must be less than or equal to 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .max(50, "Email must be less than or equal to 50 characters")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email format"
    ),
  city: Yup.string()
    .required("City is required")
    .min(2, "City must be at least 2 characters long")
    .max(20, "City must be less than or equal to 50 characters"),
  state: Yup.string()
    .required("State is required")
    .min(2, "State must be at least 2 characters long")
    .max(20, "State must be less than or equal to 50 characters"),
  zipcode: Yup.string()
    .required("Zipcode is required")
    .min(2, "Zipcode must be at least 2 characters long")
    .max(8, "Zipcode must be less than or equal to 50 characters"),
});
