import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react'

import FormikMuiMaskedTextField from "./FormikMuiMaskedTextField";
import { useFormik } from "formik";

describe("Running Test for Julius/FormikMuiMaskedTextField", () => {

  test("renders the FormikMuiMaskedTextField component", async () => {
    
    const formik: any = {values: {money: ''}, touched: {money: ''}, errors: {}, handleChange: () => {}, handleOnBlur: () => {}};

    const mask = ['$', /\d/, /\d/, /\d/, ',', /\d/, /\d/];

    render(<FormikMuiMaskedTextField mask={mask} id="money" label="money" name="money" formik={formik}/>);
    const input = screen.getByLabelText("money") as HTMLInputElement;
    userEvent.type(input, "12345");
    await waitFor(() => expect(input.value).toBe("$123,45"));
  });
});