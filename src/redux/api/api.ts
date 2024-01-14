import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => ({
        url: `/todos`,
        method: "GET",
        params: { priority },
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        // console.log("inside baseApi", data);
        return {
          url: "/todos",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
