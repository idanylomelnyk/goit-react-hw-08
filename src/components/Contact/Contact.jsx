import { BsPersonCircle, BsFillTelephoneFill, BsXCircle } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";

export default function Contact({ contacts: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.card}>
      <div>
        <div className={css.row}>
          <span>
            <BsPersonCircle />
          </span>
          <p className={css.info}>{name}</p>
        </div>
        <div className={css.row}>
          <span>
            <BsFillTelephoneFill />
          </span>
          <p className={css.info}>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={handleDelete}>
        <BsXCircle className={css.btnIcon} />
      </button>
    </div>
  );
}
