import { TextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { FormikProps } from "../FormikProps.types";

export type FormikMuiTextFieldProps = {
  id?: string;
  label?: string;
  name: string;
  size?: "small" | "medium" | "large"
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  variant?: string;
  formik: FormikProps;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & TextFieldProps;
