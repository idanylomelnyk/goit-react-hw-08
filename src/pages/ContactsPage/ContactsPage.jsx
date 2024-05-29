import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.wrapper}>
        <div>
          <h1 className={css.title}>Contacts</h1>
          {<ContactForm />}
          <SearchBox />
        </div>
        {error && <Error>Please, Log In</Error>}
        <ContactList />
        {loading && <Loader>Loading...</Loader>}
      </div>
    </>
  );
}
