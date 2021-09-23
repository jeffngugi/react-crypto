import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '113deb750bmsh390f712531a2b4fp1df581jsn70855c8c4d60'
}


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        })
    })
})

export const {
    useGetCryptosQuery
} = cryptoApi


// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '113deb750bmsh390f712531a2b4fp1df581jsn70855c8c4d60'
//     }
//   };

