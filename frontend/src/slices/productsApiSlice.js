
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

        }),
        createProduct : builder.mutation({
            query: () => ({
                url:"/api/products",
                method:"POST"

            }),
            invalidatesTags :["Products"],  // this will stop it from being cached so that we will have fresh data
        })
        
    })
})



export const {useGetProductsQuery, useGetProductByIdQuery, useCreateProductMutation} = productsApiSlice