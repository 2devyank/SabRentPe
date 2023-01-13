import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const rentApi=createApi({
reducerPath:"rentApi",
baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
endpoints:(builder)=>({
    getAllProducts:builder.query({
        query:()=>"api/rent"
    }),
}),
})

export const {useGetAllProductsQuery}=rentApi;