import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bicycleApi = createApi({
  reducerPath: "bicycleApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  tagTypes: ["Bicycles"],

  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => "bicycle",
      providesTags: ["Bicycles"],
    }),

    createBike: builder.mutation({
      query: (data) => ({
        url: "bicycle",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bicycles"],
    }),

    changeStatus: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `bicycle/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Bicycles"],
    }),

    deleteBike: builder.mutation({
      query: (id) => ({
        url: `bicycle/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bicycles"],
    }),
  }),
});

export const {
  useGetBikesQuery,
  useCreateBikeMutation,
  useChangeStatusMutation,
  useDeleteBikeMutation,
} = bicycleApi;
