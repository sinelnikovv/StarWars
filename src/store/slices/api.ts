import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { People } from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.py4e.com/api/",
  }),
  endpoints: builder => ({
    getPeople: builder.query<People, { page: number; name?: string }>({
      query: ({ page, name }) =>
        `people/?page=${page}${name && name.length > 0 && `&search=${name}`}`,
    }),
  }),
});

export const { useGetPeopleQuery } = api;
