import LoginForm from "../../components/LoginForm/LoginForm";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <h1 className={css.title}>Please, log in</h1>
      <LoginForm />
      {loading && <Loader>Loading...</Loader>}
    </div>
  );
}
