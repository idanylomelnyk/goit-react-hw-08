import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { FaCirclePlus } from "react-icons/fa6";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(7, "Too Short!")
    .max(15, "Too Long!")
    .matches(/^\d+$/, "Invalid number")
    .required("Required"),
});

export default function ContactForm() {
  const nameInputId = useId();
  const numberInputId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then((response) => {
        console.log('Good');
      })
      .catch((error) => {
        console.log(error.message);
      });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
        <Form className={css.form}>
          <h2 className={css.title}>New contact</h2>
          <div className={css.row}>
            <label className={css.label} htmlFor={nameInputId}>
              Name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameInputId}></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.row}>
            <label className={css.label} htmlFor={numberInputId}>
              Number
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberInputId}></Field>
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <div className={css.wrapper}>
            <button className={css.button} type="submit">
              <FaCirclePlus className={css.btnIcon} />
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
