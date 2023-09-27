import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import FormikMuiTextField from "./FormikMuiTextField";
import { useFormik } from 'formik';

const formik = useFormik({
    initialValues: {name},
    onSubmit: () => {},
});

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
  return <FormikMuiTextField data-testId="InputField-id" {...args} formik={args.formik}/>
}

Primary.args = {
    id: "email",
    name: "email", 
    label: "E-mail",
    formik
};