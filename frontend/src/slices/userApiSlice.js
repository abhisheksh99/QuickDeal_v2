import { apiSlice } from "./apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/users/login",
        method: "POST",
        body: data
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/api/users",
        method: "POST",
        body: data
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/api/users/logout",
        method: "POST"
      })
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: "/api/users/profile",
        method: "PUT",
        body: data
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/api/users",
        method: "GET"
      }),
      providesTags: ["Users"],
      keepUnusedDataFor: 5
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ['Users'],
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `/api/users/${id}`,
        method:"GET"

      }),
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/api/users/${data._id}`,
        method: "PUT",
        body: data,

      }),
      invalidatesTags: ['Users'],

    })
  })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useProfileMutation,useGetUsersQuery, useDeleteUserMutation,useUpdateUserMutation, useGetUserDetailsQuery } = usersApiSlice