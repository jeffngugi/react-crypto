import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react' 

const cryptoNewsHeader =  {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '113deb750bmsh390f712531a2b4fp1df581jsn70855c8c4d60'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

  const createRequest = (url) => ({url, headers: cryptoNewsHeader})

  export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi 
