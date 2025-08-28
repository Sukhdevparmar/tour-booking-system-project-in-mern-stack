import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Tours'],
  endpoints: (builder) => ({
    listTours: builder.query({
      query: (page = 1) => `/displaytour?_page=${page}`,
      providesTags: ['Tours'],
    }),
    getTour: builder.query({
      query: (title) => `/displaytour/${title}`,
    }),
  }),
});

export const { useListToursQuery,useGetTourQuery } = api;
