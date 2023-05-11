import { createSlice } from '@reduxjs/toolkit';

export const phonebookSlice = createSlice({
  name: 'phonebook',

  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  phonebookSlice.actions;
