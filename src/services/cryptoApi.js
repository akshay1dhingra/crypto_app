import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = { 
    'X-RapidAPI-Key': '377587ddbdmsh7466134054bd3e0p1bbc80jsn2c97da6d2bb3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
         getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
         })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi