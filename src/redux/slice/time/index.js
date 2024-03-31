import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../api";

export const SettingCrud = createApi({
    reducerPath: "getSettingData",
    baseQuery: api,
    tagTypes: ["getSettingData"],
    endpoints: (build) => ({
        getTime: build.query({
            query: (body) => "soat/",
            providesTags: ["getSettingData"],
        }),
        createTime: build.mutation({
            query: (body) => ({
                url: 'soat/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["getSettingData"]
        }),
        updateTime: build.mutation({
            query: (body) => ({
                url: `soat/detail/${body.id}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["getSettingData"],
        }),
        deleteTime: build.mutation({
            query: (body) => ({
                url: `soat/detail/${body?.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["getSettingData"],
        }),
    }),
});

export const {
    useGetTimeQuery,
    useCreateTimeMutation,
    useDeleteTimeMutation,
    useUpdateTimeMutation,
} = SettingCrud;
