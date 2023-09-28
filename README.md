# js-mui-formik
material ui mui formik mask

### How to use

```js

import { useFormik } from 'formik';
import { FormikMuiTextField} from 'js-mui-formik'
import { useState } from 'react';
import * as yup from 'yup';


export default function App() {

    const validationSchema = yup.object({
        name: yup.string().required('Please enter name').min(2, "Name too short")
    });

    const [name, setName] = useState<string>("");

    const formik = useFormik({
        initialValues: {name},
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values, formikHelpers) => {
            setName(() => values.name);
            formikHelpers.resetForm();
        },
    });

  return (
    <div>
      <h1>Hello {name} </h1>
        <form onSubmit={formik.handleSubmit}>
            <FormikMuiTextField name="name" label="Name" formik={formik}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
} 


```

### Use input with mask
```js
import { useFormik } from 'formik';
import { FormikMuiMaskedTextField, FormikMuiTextField } from 'js-mui-formik'
import { BR_MOBILE_MASK, BR_PHONE_MASK } from 'js-mui-formik'
import { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

const InputWrapper = styled.div`margin: 1rem 0`;

class User {
  name: string;
  phone: string;
  mobile: string;

  constructor() {
    this.name = "";
    this.phone = "";
    this.mobile = "";
  }
}

export default function ShowInputs() {

  const validationSchema = yup.object({
    name: yup.string().required('Please enter name').min(2, "Name too short"),
    phone: yup.string().required('Please enter phone').min(11, "Phone too short"),
    mobile: yup.string().required('Please enter mobile').min(12, "Phone too short")

  });

  const [user, setUser] = useState<User>(new User);

  const formik = useFormik({
    initialValues: { ...user },
    enableReinitialize: true,
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values, formikHelpers) => {
      setUser(() => values);
      formikHelpers.resetForm();
    },
  });

  return (
    <div>
      <h1>
        Hello {user?.name ? user?.name : '______'},&nbsp;
        your phone is {user?.phone ? user?.phone : '_____'}&nbsp;
        and your mobile is {user?.mobile ? user?.mobile : '_____'}.
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <FormikMuiTextField
            name="name"
            label="Name"
            placeholder='Enter with your name'
            formik={formik} />
        </InputWrapper>
        <InputWrapper>
          <FormikMuiMaskedTextField
            id="phone"
            name="phone"
            mask={BR_PHONE_MASK}
            alternativeMask={BR_MOBILE_MASK}
            testAlternativeMask={(value: string) => value.replace(/\D/g, '')[2] === '9'}
            label="Phone"
            formik={formik} />
        </InputWrapper>
        <InputWrapper>
          <FormikMuiMaskedTextField
            id="mobile"
            name="mobile"
            mask={BR_MOBILE_MASK}
            label="Mobile"
            formik={formik} />
        </InputWrapper>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
```