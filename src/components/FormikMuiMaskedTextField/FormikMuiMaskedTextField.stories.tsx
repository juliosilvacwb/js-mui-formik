import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FormikMuiMaskedTextField from "./FormikMuiMaskedTextField";
import { useFormik } from 'formik';
import { BR_CEP_MASK, BR_CNPJ_MASK, BR_CPF_MASK, BR_PHONE_MASK, BR_MOBILE_MASK } from "./MaskedComponent";

const meta: Meta<typeof FormikMuiMaskedTextField> = {
  component: FormikMuiMaskedTextField,
  title: "Julius/FormikMuiMaskedTextField",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FormikMuiMaskedTextField>;

const formik: any= {};

export const Main: Story = (args) => {
  const formik = useFormik({
      initialValues: {[args.name]: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiMaskedTextField data-testId="AnyMask-id" {...args} formik={formik}/>
}

Main.args = {
    id: "main",
    name: "main", 
    label: "Char Number Any",
    mask: [/[a-zA-Z]/, /\d/, /\D/],
    formik
};

export const CEP: Story = (args) => {
  const formik = useFormik({
      initialValues: {[args.name]: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiMaskedTextField data-testId="CEPMask-id" {...args} formik={formik}/>
}

CEP.args = {
    id: "cep",
    name: "cep", 
    label: "CEP",
    mask: BR_CEP_MASK,
    formik
};

export const CNPJ: Story = (args) => {
  const formik = useFormik({
      initialValues: {[args.name]: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiMaskedTextField data-testId="CNPJMask-id" {...args} formik={formik}/>
}

CNPJ.args = {
    id: "cnpj",
    name: "cnpj", 
    label: "CNPJ",
    mask: BR_CNPJ_MASK,
    formik
};

export const CPF: Story = (args) => {
  const formik = useFormik({
      initialValues: {[args.name]: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiMaskedTextField data-testId="CPFMask-id" {...args} formik={formik}/>
}

CPF.args = {
    id: "cpf",
    name: "cpf", 
    label: "CPF",
    mask: BR_CPF_MASK,
    formik
};

export const MOBILE: Story = (args) => {
  const formik = useFormik({
      initialValues: {[args.name]: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiMaskedTextField data-testId="MOBILEMask-id" {...args} formik={formik}/>
}

MOBILE.args = {
    id: "mobile",
    name: "mobile", 
    label: "MOBILE",
    mask: BR_MOBILE_MASK,
    formik
};

export const PHONE: Story = (args) => {
  const formik = useFormik({
      initialValues: {[args.name]: ''},
      enableReinitialize: true,
      onSubmit: (values, formikHelpers) => {
          formikHelpers.resetForm();
      },
  });
  return <FormikMuiMaskedTextField data-testId="PHONEMask-id" {...args} formik={formik}/>
}

PHONE.args = {
    id: "phone",
    name: "phone", 
    label: "PHONE",
    mask: BR_PHONE_MASK,
    alternativeMask: BR_MOBILE_MASK, 
    testAlternativeMask: (value: string) => value.replace(/\D/g, '')[2] === '9', 
    formik
}