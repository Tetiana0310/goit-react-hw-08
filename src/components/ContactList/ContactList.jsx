import { selectContacts } from "../../redux/contactsSlice";
import { selectContactFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const reduxContacts = useSelector(selectContacts);
  const searchStr = useSelector(selectContactFilter);

  const findedContacts = reduxContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchStr.toLowerCase())
  );

  if (findedContacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className={css.list}>
      {findedContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
