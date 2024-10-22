import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const RegistrationForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}>
      {() => (
        <Form className={css.form}>
          <div className={css.fieldContainer}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field type="text" id="name" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.fieldContainer}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field type="email" id="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.fieldContainer}>
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
