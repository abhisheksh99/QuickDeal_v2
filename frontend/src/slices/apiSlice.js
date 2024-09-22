import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({baseUrl : " "}),  // we have proxy
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
