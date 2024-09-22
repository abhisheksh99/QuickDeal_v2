
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/api/products",
                 method: 'GET'
            }),
            keepUnusedDataFor:5, // caching
        }),
        getProductById: builder.query({
            query: (id) =>({
                url: `/api/products/${id}`,
                method:"GET",

            }),
            keepUnusedDataFor:5, // caching

        })
    })
})



export const {useGetProductsQuery, useGetProductByIdQuery} = productsApiSlice