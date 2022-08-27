import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://goit-phonebook-api.herokuapp.com/contacts',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/`,
      providesTags: ['Contact'],
    }),
    addContacts: builder.mutation({
      query: payload => ({ url: `/`, method: 'POST', body: payload }),
      invalidatesTags: ['Contact'],
    }),

    deleteContacts: builder.mutation({
      query: id => ({ url: `/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactsMutation,
} = contactApi;
