import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const requestApiSlice = createApi({
  reducerPath: 'requestApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (): string => '/posts'
    })
  })
});

export const { useGetPostsQuery } = requestApiSlice;
export type RequestApiSlice = typeof requestApiSlice;
export default requestApiSlice;
