import { ChangeEventHandler, FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { FormikValues, FormikConfig } from 'formik';

type FormikMuiTextFieldProps = {
    id?: string;
    label?: string;
    name: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    variant?: string;
    formik: FormikValues & FormikConfig<FormikValues>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
} & TextFieldProps;

declare const FormikMuiTextField: FC<FormikMuiTextFieldProps>;

interface FormikMuiMaskedTextFieldProps {
    id?: string;
    label?: string;
    name: string;
    formik: FormikValues & FormikConfig<FormikValues>;
    size?: any;
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    variant?: "filled" | "outlined" | "standard" | undefined;
    mask?: string[];
    alternativeMask?: string[];
    testAlternativeMask?: (value: string) => boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    startAdornment?: any;
    endAdornment?: any;
}

declare const FormikMuiMaskedTextField: FC<FormikMuiMaskedTextFieldProps>;

export { FormikMuiMaskedTextField, type FormikMuiMaskedTextFieldProps, FormikMuiTextField, type FormikMuiTextFieldProps };
