# js-mui-formik
material ui mui formik 

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