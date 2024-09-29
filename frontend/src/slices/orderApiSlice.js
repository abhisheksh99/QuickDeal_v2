import { apiSlice } from "./apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
        createOrder: builder.mutation({
            query: (order) =>({
                url:"/api/orders",
                method: "POST",
                body: {...order}
            })
        })

    })
})


export const {useCreateOrderMutation} = orderApiSlice 