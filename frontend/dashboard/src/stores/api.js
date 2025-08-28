import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/Alltours` }),
    tagTypes: ['Tours'],
    endpoints: (build) => ({
        listTours: build.query({
            query: (page = 1) => `?_page=${page}`,
            providesTags: ['Tours'],
        }),

        addTours: build.mutation({
            query: (formData) => ({
                url: `${BASE_URL}/inserttours`,
                method: 'POST',
                body: formData,

            }),
            invalidatesTags: ['Tours'],
        }),
        listusers: build.mutation({
            query: () => ({
                url: `${BASE_URL}/Allusers`,
                method: 'GET',
            }),
            providesTags: ['Tours'],
        }),
        listorders: build.mutation({
            query: () => ({
                url: `${BASE_URL}/allorders`,
                method: 'GET',
            }),
            providesTags: ['Tours'],
        }),
        updateTours: build.mutation({
            query: ({ currentTitle, newTitle, startingPlace, endingPlace, startingDate, endingDate, estimatedKm, tourPrice, currentPlace, currentPoint, newPlace, newPoint }) => ({
                url: `${BASE_URL}/updatetours/:title`,
                method: 'PUT',
                body: { currentTitle, newTitle, startingPlace, endingPlace, startingDate, endingDate, estimatedKm, tourPrice, currentPlace, currentPoint, newPlace, newPoint },
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Tours'],
        }),
        deleteTours: build.mutation({
            query: ({ deletetitle }) => ({
                url: `${BASE_URL}/deletetours/:title`,
                method: 'DELETE',
                body: { deletetitle },
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            invalidatesTags: ['Tours'],
        }),

    }),
});

export const {
    useListToursQuery,
    useListusersMutation,
    useListordersMutation,
    useAddToursMutation,
    useUpdateToursMutation,
    useDeleteToursMutation,


} = api;
