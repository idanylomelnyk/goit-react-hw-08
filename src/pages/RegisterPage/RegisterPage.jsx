import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <h1 className={css.title}>Create account</h1>
      <RegistrationForm />
      {loading && <Loader>Loading...</Loader>}
    </div>
  );
}
