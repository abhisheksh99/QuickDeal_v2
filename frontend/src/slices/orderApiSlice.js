import { apiSlice } from "./apiSlice"

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
                method: "GET"
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
            keepUnusedDataFor: 5
        }),
        getMyOrders: builder.query({
            query: () => ({
                url: "/api/orders/myorders",
                method: "GET"
            }),
            keepUnusedDataFor: 5
        }),
        getOrders: builder.query({
            query: () => ({
                url: "/api/orders"
            }),
            keepUnusedDataFor: 5
        }),
        deliverOrder: builder.mutation({
            query: (id) => ({
                url: `/api/orders/${id}/deliver`,
                method: "PUT"
            })
        })
    })
})

export const { 
    useCreateOrderMutation, 
    useGetOrderDetailsQuery, 
    usePayOrderMutation, 
    useGetPayPalClientIDQuery,
    useGetMyOrdersQuery,
    useGetOrdersQuery,
    useDeliverOrderMutation
} = orderApiSlice