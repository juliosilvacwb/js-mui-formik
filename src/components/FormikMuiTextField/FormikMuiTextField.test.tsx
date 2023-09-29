import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from "react";

import FormikMuiTextField from "./FormikMuiTextField";

describe("Running Test for FormikMuiTextField", () => {
  test("Check placeholder in Input", () => {

    const formik: any = {values: {hello: ''}, touched: {hello: ''}, errors: {}, handleChange: () => {}, handleOnBlur: () => {}};

    render(<FormikMuiTextField placeholder="Hello julius" id="hello" label="hello" name="hello"  formik={formik}/>)
    expect(screen.getByPlaceholderText('Hello julius')).toHaveAttribute('placeholder', 'Hello julius');
  });
});