import { ChangeEventHandler } from "react";
import { FormikProps } from "../FormikProps.types";
export interface FormikMuiMaskedTextFieldProps {
    id?: string;
    label?: string;
    name: string;
    formik: FormikProps;
    size?: any;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    variant?: "filled" | "outlined" | "standard" | undefined;
    mask?: any[];
    alternativeMask?: any[];
    testAlternativeMask?: (value: string) => boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    startAdornment?: any;
    endAdornment?: any;
}
