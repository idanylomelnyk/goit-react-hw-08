import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import css from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contacts) => (
          <li className={css.item} key={contacts.id}>
            <Contact contacts={contacts} />
          </li>
        ))}
      </ul>
    </>
  );
}
