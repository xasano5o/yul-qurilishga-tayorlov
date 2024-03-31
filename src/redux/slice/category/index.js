import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../api";

export const CategoryCrud = createApi({
    reducerPath: "getCategorytData",
    baseQuery: api,
    tagTypes: ["getCategoryt"],
    endpoints: (build) => ({
        getCategory: build.query({
            query: (body) => "register/",
            providesTags: ["getCategoryt"],
        }),
        createCategoria: build.mutation({
            query: (body) => ({
                url: 'register/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["getCategoryt"]
        }),
        updateCategorie: build.mutation({
            query: (body) => ({
                url: `register/detail/${body.id}/`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["getCategoryt"],
        }),
        deleteCategorie: build.mutation({
            query: (body) => ({
                url: `/register/detail/${body?.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["getCategoryt"],
        }),
    }),
});

export const {
    useGetCategoryQuery,
    useCreateCategoriaMutation,
    useDeleteCategorieMutation,
    useUpdateCategorieMutation,
} = CategoryCrud;
