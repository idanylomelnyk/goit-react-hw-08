import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then((reponse) => {
        console.log("good");
      })
      .catch((error) => {
        console.log(error.message);
      });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    password: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={css.form} autoComplete="off">
        <div className={css.row}>
          <label className={css.label}>Email</label>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.row}>
          <label className={css.label}>Password</label>
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <div className={css.wrapper}>
          <button className={css.button} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}
