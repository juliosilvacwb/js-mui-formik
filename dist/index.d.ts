/// <reference types="react" />
import { ChangeEventHandler, FC } from 'react';
import { TextFieldProps } from '@mui/material';
import { FormikErrors, FormikTouched, FormikState, FieldConfig, FieldInputProps, FieldMetaProps, FieldHelperProps } from 'formik';

type Values = any;
interface FormikProps {
    initialValues: Values;
    initialErrors: FormikErrors<unknown>;
    initialTouched: FormikTouched<unknown>;
    initialStatus: any;
    handleBlur: {
        (e: React.FocusEvent<any, Element>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
    resetForm: (nextState?: Partial<FormikState<Values>>) => void;
    setErrors: (errors: FormikErrors<Values>) => void;
    setFormikState: (stateOrCb: FormikState<Values> | ((state: FormikState<Values>) => FormikState<Values>)) => void;
    setFieldTouched: (field: string, touched?: boolean, shouldValidate?: boolean) => Promise<FormikErrors<Values>> | Promise<void>;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<FormikErrors<Values>> | Promise<void>;
    setFieldError: (field: string, value: string | undefined) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: (touched: FormikTouched<Values>, shouldValidate?: boolean) => Promise<FormikErrors<Values>> | Promise<void>;
    setValues: (values: React.SetStateAction<Values>, shouldValidate?: boolean) => Promise<FormikErrors<Values>> | Promise<void>;
    submitForm: () => Promise<any>;
    validateForm: (values?: Values) => Promise<FormikErrors<Values>>;
    validateField: (name: string) => Promise<void> | Promise<string | undefined>;
    isValid: boolean;
    dirty: boolean;
    unregisterField: (name: string) => void;
    registerField: (name: string, { validate }: any) => void;
    getFieldProps: (nameOrOptions: string | FieldConfig<any>) => FieldInputProps<any>;
    getFieldMeta: (name: string) => FieldMetaProps<any>;
    getFieldHelpers: (name: string) => FieldHelperProps<any>;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnMount: boolean;
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
}

type FormikMuiTextFieldProps = {
    id?: string;
    label?: string;
    name: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    placeholder?: string;
    type?: string;
    variant?: string;
    formik: FormikProps;
    onChange?: ChangeEventHandler<HTMLInputElement>;
} & TextFieldProps;

declare const FormikMuiTextField: FC<FormikMuiTextFieldProps>;

interface FormikMuiMaskedTextFieldProps {
    id?: string;
    label?: string;
    name: string;
    formik: FormikProps;
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
