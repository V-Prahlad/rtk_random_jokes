import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.chucknorris.io/jokes/',
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => '/random',
    }),
  }),
});

export const { useGetUserQuery } = userAPI;
