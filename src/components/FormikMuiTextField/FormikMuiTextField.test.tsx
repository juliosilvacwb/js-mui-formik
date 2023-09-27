import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react';

import FormikMuiTextField from "./FormikMuiTextField";
import { useFormik } from "formik";

const formik = useFormik({
  initialValues: {name},
  onSubmit: () => {},
});

describe("Running Test for FormikMuiTextField", () => {
  test("Check placeholder in Input", () => {
    render(<FormikMuiTextField placeholder="Hello julius" id="hello" label="hello" name="hello"  formik={formik}/>)
    expect(screen.getByPlaceholderText('Hello julius')).toHaveAttribute('placeholder', 'Hello julius');
  });
});