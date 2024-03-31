import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../../../api";

export const CertifcatCrud = createApi({
    reducerPath: "CertifcatCrudData",
    baseQuery: api,
    tagTypes: ["getCategoryt"],
    endpoints: (build) => ({
        getCertifcat: build.query({
            query: (body) => "certificated/",
            providesTags: ["Certifcat"],
        }),
        createCertifcat: build.mutation({
            query: (body) => ({
                url: 'register/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ["Certifcat"]
        }),
        createCertifcatID: build.mutation({
            query: (body) => ({
                url: `make/qr/`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ["Certifcat"]
        }),
        updateCertifcat: build.mutation({
            query: (body) => ({
                url: `certificated/detail/${body.id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["Certifcat"],
        }),
        deleteCertifcat: build.mutation({
            query: (body) => ({
                url: `certificated/detail/${body?.id}/`,
                method: "DELETE",
                body,
            }),
            invalidatesTags: ["Certifcat"],
        }),
    }),
});

export const {
    useCreateCertifcatIDMutation,
    useCreateCertifcatMutation,
    useDeleteCertifcatMutation,
    useGetCertifcatQuery,
    useUpdateCertifcatMutation,
} = CertifcatCrud;
