import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const rentApi=createApi({
reducerPath:"rentApi",
baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
endpoints:(builder)=>({
    getAllProducts:builder.query({
        query:()=>"products"
    }),
}),
})

export const {useGetAllProductsQuery}=rentApi;