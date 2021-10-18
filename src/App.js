import React from 'react'
import './App.css';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Enter a valid Email").required("Email is required")
})


function App() {
  const classes = useStyle()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
    },
    validationSchema: validationSchema
  })

  return (
    <>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField 
          id="firstName" name="firstName" 
          label="First Name" margin="normal" 
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField 
          id="lastName" name="lastName" 
          label="Last Name" margin="normal"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
         />
        <TextField 
          id="email" name="email" 
          label="Email Address" margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button type="submit" variant="outlined">submit</Button> 
      </form>
    </>
  );
}

const useStyle = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '20rem',
    margin: '5rem auto'
  }
})

export default App;

