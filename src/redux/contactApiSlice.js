import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'


export const contactApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62fc210be4bcaf535192737a.mockapi.io/' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],

    }),
    addContacts: builder.mutation({
      query: (payload) => ({ url: `/contacts`,
      method: 'POST',
      body: payload,}),
      invalidatesTags: ['Contact'],

    }),

    deleteContacts: builder.mutation({
      query: (id) => ({ url: `/contacts/${id}`,
      method: 'DELETE',}),
      invalidatesTags: ['Contact'],

    }),
  }),
})




export const { useGetContactsQuery, useDeleteContactsMutation, useAddContactsMutation} = contactApi