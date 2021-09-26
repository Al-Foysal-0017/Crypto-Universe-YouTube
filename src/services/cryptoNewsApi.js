import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "61e2435ba6mshb21c160ad70c4e0p16ee17jsn07b275feabf2",
};
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;
