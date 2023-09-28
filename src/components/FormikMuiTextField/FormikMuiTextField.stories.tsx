import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FormikMuiTextField from "./FormikMuiTextField";
import { useFormik } from 'formik';

const formik: any= {};

const meta: Meta<typeof FormikMuiTextField> = {
  component: FormikMuiTextField,
  title: "Julius/FormikMuiTextField",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FormikMuiTextField>;

export const Primary: Story = (args) => {

  const formik = useFormik({
    initialValues: {[args.name]: ''},
    enableReinitialize: true,
    onSubmit: (values, formikHelpers) => {
        formikHelpers.resetForm();
    },
  });

  return <FormikMuiTextField data-testId="InputField-id" {...args} formik={formik}/>
}

Primary.args = {
    id: "email",
    name: "email", 
    label: "E-mail",
    formik
};