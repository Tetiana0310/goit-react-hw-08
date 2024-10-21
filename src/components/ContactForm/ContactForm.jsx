import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";

export default function ContactForm() {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const initialValues = { name: "", number: "" };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
      message: "Invalid phone number",
      excludeEmptyString: false,
    }),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      <Form className={css.container}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field className={css.input} name="name" type="text" id={nameId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={clsx(css.label, css.margin)} htmlFor={phoneId}>
          Number
        </label>
        <Field className={css.input} name="number" type="tel" id={phoneId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
