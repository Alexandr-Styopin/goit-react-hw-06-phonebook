import Form from './form/Form';
import Contacts from './Contacts/Contacts';
import css from './App.module.css';

export function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <Contacts />
    </div>
  );
}
