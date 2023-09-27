import { TextField } from "@mui/material";
import PropTypes from 'prop-types';
import React, { FC } from "react";
import { FormikMuiTextFieldProps } from "./FormikMuiTextField.types";


const FormikMuiTextField: FC<FormikMuiTextFieldProps> = ({ ...props }) => {

    const { id, name, label, type, formik, ...rest } = props;

    return  <TextField
                fullWidth
                id={id}
                name={name}
                label={label}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type={type}
                error={Boolean(formik.touched[name]) && Boolean(formik.errors[name])}
                helperText={helperText(formik, name) }
                {...rest}
            />
}

function helperText(formik: any, name: string) {
    if (Boolean((formik.touched[name]) && Boolean(formik.errors[name])))
        return <>{ formik.errors[name] }</>
    else 
    return null
}

FormikMuiTextField.defaultProps = {
    type: "text", 
    variant: "outlined"
}

FormikMuiTextField.propTypes = {
    id: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired, 
    type: PropTypes.string, 
    formik: PropTypes.any.isRequired

}

export default FormikMuiTextField;