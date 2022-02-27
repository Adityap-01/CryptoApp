import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '2a328f1996mshbcc87c64593f170p10953fjsn3acd483dd726'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url,headers:cryptoApiHeaders});

export const cryptoApi = createApi ({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)       
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
})

// The redux toolkit creates a hook which can be called instantly 
export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi