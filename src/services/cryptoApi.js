import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "61e2435ba6mshb21c160ad70c4e0p16ee17jsn07b275feabf2",
};
const createRequest = (url) => ({ url, headers: cryptoHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history/${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

// return {
//   url: "/coins",
//   method: "GET",
//   headers: {
//     "x-bingapis-sdk": "true",
//     "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
//     "x-rapidapi-key": "61e2435ba6mshb21c160ad70c4e0p16ee17jsn07b275feabf2",
//   },
// };
