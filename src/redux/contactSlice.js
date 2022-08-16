import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      filter: ''
  },
  reducers: {
    addContact: (state, {payload}) => {
        state.items.push(payload)
    },

    
    removeContact: (state, {payload}) => {
        state.items = state.items.filter(
            contact => contact.id !== payload
          );
    },

    addFilter: (state, {payload}) => {
        state.filter = payload
}
}})

// Action creators are generated for each case reducer function
export const { addContact, removeContact, addFilter } = contactSlice.actions

export default contactSlice.reducer


export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;

export const useFiltredContcts = () => {
    const filter = useSelector(getFilterValue);
    const contacts = useSelector(getContacts)
    const normalizeFiltr = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFiltr)
    );
  }
