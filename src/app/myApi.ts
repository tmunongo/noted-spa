import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers, { getState }) => {
      // Set your headers here, including authentication headers if needed
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    // Add more authentication endpoints here as needed
  }),
})

export const { useLoginMutation } = myApi
