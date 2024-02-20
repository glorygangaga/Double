import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TypeState } from "../../models";

const BASE_URL = 'http://localhost:3000/prices';

export const api = createApi({
  reducerPath: 'pizza/api ',
  tagTypes: ['pizza'],
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (build) => ({
    getPizza: build.query<TypeState[], string>({
      query: () => '/',
    }),
  }),
})

export const {useGetPizzaQuery} = api