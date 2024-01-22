
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jwelleryApi = createApi({
    reducerPath: 'jwelleryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://onlineparttimejobs.in/api/' }),
    tagTypes: ['productType'],
    endpoints: (builder) => ({
        getProductType: builder.query({
            query: (token) => ({
                url: 'category/public',
                method: 'GET',
            }),
            providesTags: ['productType']
        }),


    })

})

export const { useGetProductTypeQuery } = jwelleryApi