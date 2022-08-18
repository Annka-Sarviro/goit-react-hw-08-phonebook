import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactApi } from './contactApiSlice'


export const store = configureStore({
  reducer: {
    filter: filterSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
})

setupListeners(store.dispatch)

