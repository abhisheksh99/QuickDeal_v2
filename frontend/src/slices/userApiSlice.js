import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/users/login",
        method: "POST",
        body: data,
      }),
    }),
    logout : builder.mutation({
      query: () =>({
        url:"/api/user/logout",
        method:"POST"

      }),

    })
  }),
});

export const { useLoginMutation, useLogoutMutation } = usersApiSlice;
