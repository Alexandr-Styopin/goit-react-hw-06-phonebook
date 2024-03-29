import { useDispatch } from 'react-redux';
import { removeContact } from '../../../../redux/phonebookSlice';
import css from '../ContactsItem/ContactsItem.module.css';

export default function ContactsItem({ contact }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {contact.name}: {contact.number}
      </p>

      <button className={css.contactBtn} type="button" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
}
