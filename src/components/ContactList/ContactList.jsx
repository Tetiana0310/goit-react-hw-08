import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error...</h2>}

      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
