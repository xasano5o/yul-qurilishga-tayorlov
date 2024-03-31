import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../api";

export const DirectionCrud = createApi({
    reducerPath: "DirectionData",
    baseQuery: api,
    tagTypes: ["Direction"],
    endpoints: (build) => ({
        getDirection: build.query({
            query: (body) => "yonalish/",
            providesTags: ["Direction"],
        }),
        createDirection: build.mutation({
            query: (body) => ({
                url: 'yonalish/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["Direction"]
        }),
        updateDirection: build.mutation({
            query: (body) => ({
                url: `yonalish/detail/${body.id}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["Direction"],
        }),
        deleteDirection: build.mutation({
            query: (body) => ({
                url: `yonalish/detail/${body?.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["Direction"],
        }),
    }),
});

export const {
useCreateDirectionMutation,
useGetDirectionQuery,
useDeleteDirectionMutation,
useUpdateDirectionMutation,
} = DirectionCrud;
