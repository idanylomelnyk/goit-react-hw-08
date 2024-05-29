import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchId = useId();
  const value = useSelector(selectName);

  return (
    <div className={css.form}>
      <label className={css.label} htmlFor={searchId}>
        Search
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        value={value}
        id={searchId}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
      />
    </div>
  );
}
