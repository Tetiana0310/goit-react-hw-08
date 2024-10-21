import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.contactList}>
        <p className={css.contactText}>
          <IoPerson /> {contact.name}
        </p>
        <p>
          <BsFillTelephoneFill /> {contact.number}
        </p>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(contact.id))}
          className={css.btn}>
          Delete
        </button>
      </div>
    </div>
  );
}
