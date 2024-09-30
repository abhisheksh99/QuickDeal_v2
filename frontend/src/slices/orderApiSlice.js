import { apiSlice } from "./apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: "/api/orders",
                method: "POST",
                body: {...order}
            })
        }),
        getOrderDetails: builder.query({
            query: (id) => ({
                url: `/api/orders/${id}`,
                method: "GET",
            }),
            keepUnusedDataFor: 5
        }),
        payOrder: builder.mutation({
            query: ({id, details}) => ({
                url: `/api/orders/${id}/pay`,
                method: "PUT",
                body: {...details}
            })
        }),
        getPayPalClientID: builder.query({
            query: () => ({
                url: "/api/config/paypal"
            }),
            keepUnusedDataFor: 5,
        })
    })
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery, usePayOrderMutation, useGetPayPalClientIDQuery } = orderApiSlice;