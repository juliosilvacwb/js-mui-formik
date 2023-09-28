import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import MaskedComponent from './MaskedComponent';
import { FormikMuiMaskedTextFieldProps } from './FormikMuiMaskedTextField.types';

const  FormikMuiMaskedTextField:FC<FormikMuiMaskedTextFieldProps>  = ({ ...props }) => {

    const { id, name, label, formik, size, type, startAdornment, endAdornment, variant, mask, testAlternativeMask, alternativeMask, ...rest } = props;

    const [efetiveMask, setEfetiveMask] = useState(mask)

    const onMask = (newValue: string) => {
        if (!!testAlternativeMask && testAlternativeMask(newValue)) {
            setEfetiveMask(() => alternativeMask);
        } else {
            setEfetiveMask(() => mask);
        }
    }

    const onChange = (event: any) => {
        onMask(event.target.value);
        formik.handleChange(event)
    }
    
    const onBlur = (event: any) => {
        onMask(event.target.value);
        formik.handleBlur(event)
    }

    return  <FormControl fullWidth variant={variant} size={size} error={Boolean(formik.touched[name]) && Boolean(formik.errors[name])}>

                { label && <InputLabel htmlFor={id} shrink={Boolean(formik.values[name])}>{label}</InputLabel> }

                <OutlinedInput
                    id={id}
                    name={name}
                    notched={!!formik.values[name]}
                    type={type}
                    value={formik.values[name] || ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    startAdornment={startAdornment}
                    endAdornment={endAdornment}
                    label={label}
                    inputComponent={MaskedComponent}
                    inputProps={{
                        mask: efetiveMask
                    }}
                    {...rest}
                />
                { 
                    (formik.touched[name] && formik.errors[name]) && 
                    <FormHelperText>{`${formik.errors[name]}`}</FormHelperText> 
                }
            </FormControl>
}

FormikMuiMaskedTextField.defaultProps = {
    disabled: false,
    size: 'medium',
    type: 'text',
    variant: 'outlined'
};

FormikMuiMaskedTextField.propTypes = {
    formik: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mask: PropTypes.array.isRequired,
    alternativeMask: PropTypes.array,
    testAlternativeMask: PropTypes.func,
};

export default FormikMuiMaskedTextField;
