import { configureStore } from '@reduxjs/toolkit'
import contactSlice from './contactSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactApi } from './contactApiSlice'


export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
})

setupListeners(store.dispatch)

