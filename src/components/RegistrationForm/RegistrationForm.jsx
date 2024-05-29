import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((reponse) => {
        console.log("Good");
      })
      .catch((error) => {
        console.log(error.message);
      });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
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
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}>
      <Form className={css.form} autoComplete="off">
        <div className={css.row}>
          <label className={css.label}>Username</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
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
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
}
