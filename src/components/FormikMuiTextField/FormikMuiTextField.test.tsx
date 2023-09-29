import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react';

import FormikMuiTextField from "./FormikMuiTextField";
import { useFormik } from "formik";

describe("Running Test for FormikMuiTextField", () => {
  test("Check placeholder in Input", () => {

    const formik: any = {values: {hello: ''}, touched: {hello: ''}, errors: {}, handleChange: () => {}, handleOnBlur: () => {}};

    render(<FormikMuiTextField placeholder="Hello julius" id="hello" label="hello" name="hello"  formik={formik}/>)
    expect(screen.getByPlaceholderText('Hello julius')).toHaveAttribute('placeholder', 'Hello julius');
  });
});