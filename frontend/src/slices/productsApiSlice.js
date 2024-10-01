import { apiSlice } from "./apiSlice"

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({pageNumber, keyword}) => ({
                url: "/api/products",
                method: 'GET',
                params:{
                    pageNumber,
                    keyword,
                },
            }),
            providesTags: ["Products"], // done so that we dont need to refresh the page
            keepUnusedDataFor: 5 // caching
        }),
        getProductById: builder.query({
            query: (id) => ({
                url: `/api/products/${id}`,
                method: "GET"
            }),
           
            keepUnusedDataFor: 5 // caching
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: "/api/products",
                method: "POST"
            }),
            invalidatesTags: ["Products"]  // this will stop it from being cached so that we will have fresh data
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `/api/products/${data._id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Product"]  // this will stop it from being cached so that we will have fresh data
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: "/api/upload",
                method: "POST",
                body: data
            })
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/api/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]  // Add this to invalidate the cache after deletion
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: `/api/products/${data._id}/reviews`,
                method: "POST",
                body: data,

            }),
            
            invalidatesTags: ["Product"]
        }),
        getTopProducts: builder.query({
            query : () => ({
                url: "/api/products/top",
                method: "GET"
            }),
            keepUnusedDataFor:5,
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductMutation,
    useCreateReviewMutation,useGetTopProductsQuery
} = productsApiSlice