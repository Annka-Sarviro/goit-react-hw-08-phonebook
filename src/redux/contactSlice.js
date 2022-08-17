import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
     filter: ''
  },
  reducers: {
    

    addFilter: (state, {payload}) => {
        state.filter = payload
}
}})

// Action creators are generated for each case reducer function
export const {addFilter } = contactSlice.actions

export default contactSlice.reducer


export const getFilterValue = state => state.contacts.filter;

