import React from "react";
import css from "./LoginForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const LoginForm = ({ onSubmit }) => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
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
          <div className={css.wrapper}>
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
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
