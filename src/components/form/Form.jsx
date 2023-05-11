import { useState } from 'react';
import { nanoid } from 'nanoid';

import InputName from './input-name/InpitName';
import InputNumber from './input-number/InputNumer';
import InputButtin from './inbut-button/InputButtin';
import css from '../form/Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/phonebookSlice';

export default function Form() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSumitForm = e => {
    e.preventDefault();
    if (contacts.map(({ name }) => name).includes(name)) {
      alert(`${name} is already in contact`);
      e.target.reset();
      return;
    }

    dispatch(addContact({ name: name, number: number, id: nanoid() }));
    e.target.reset();
  };

  return (
    <form
      className={css.submitForm}
      onSubmit={handleSumitForm}
      onChange={handleInputChange}
    >
      <InputName />
      <InputNumber />
      <InputButtin />
    </form>
  );
}
