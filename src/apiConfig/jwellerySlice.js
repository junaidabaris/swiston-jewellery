
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './serverUrl';

export const jwelleryApi = createApi({
    reducerPath: 'jwelleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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
        getProduct: builder.mutation({
            query: (pay) => ({
                url: `product/filter`,
                method: 'POST',
                body:pay
            }),
        }),
        getJwellLength: builder.query({
            query: (pay) => ({
                url: `length/public`,
                method: 'GET',
                body:pay
            }),
        }),
        getcurateby: builder.query({
            query: (pay) => ({
                url: `curatedBy/public`,
                method: 'GET',
                body:pay
            }),
        }),
        getAlphabetic: builder.query({
            query: (pay) => ({
                url: `alphabetic/public`,
                method: 'GET',
                body:pay
            }),
        }),


    })

})

export const {
    useGetAlphabeticQuery,
    useGetProductTypeQuery,
    useGetMaterialQuery,
    useGetMetalTypeQuery,
    useGetshopforQuery,
    useGetRingsizeQuery,
    useGetGemstonQuery,
    useGetJwellLengthQuery,
    useGetProductMutation,
    useGetcuratebyQuery,
    useGetThemesQuery
} = jwelleryApi