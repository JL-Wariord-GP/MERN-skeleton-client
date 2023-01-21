import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products", "Customers", "Transctions"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"]
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
        }),
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
                url: "client/transctions",
                method: "GET",
                params: { page, pageSize, sort, search }
            }),
            providesTags: ["Transctions"],
        }),
    }),
});

export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionsQuery } = api;