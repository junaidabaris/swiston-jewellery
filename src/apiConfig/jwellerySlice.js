
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jwelleryApi = createApi({
    reducerPath: 'jwelleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://onlineparttimejobs.in/api/' }),
    tagTypes: [''],
    endpoints: (builder) => ({
        getProductType: builder.query({
            query: (token) => ({
                url: 'category/public',
                method: 'GET',
            }),
        }),
        getMaterial: builder.query({
            query: () => ({
                url: 'material/public',
                method: 'GET',
            }),
        }),
        getMetalType: builder.query({
            query: () => ({
                url: 'metalType/public',
                method: 'GET',
            }),
        }),
        getshopfor: builder.query({
            query: () => ({
                url: 'shopForModule/public',
                method: 'GET',
            }),
        }),
        getRingsize: builder.query({
            query: (uid) => ({
                url: `ringSize/parent/${uid}`,
                method: 'GET',
            }),
        }),
        getGemston: builder.query({
            query: (uid) => ({
                url: `gemstone/public`,
                method: 'GET',
            }),
        }),
        getThemes: builder.query({
            query: () => ({
                url: `themejewel/public`,
                method: 'GET',
            }),
        }),


    })

})

export const {
    useGetProductTypeQuery,
    useGetMaterialQuery,
    useGetMetalTypeQuery,
    useGetshopforQuery,
    useGetRingsizeQuery,
    useGetGemstonQuery,
    useGetThemesQuery
} = jwelleryApi