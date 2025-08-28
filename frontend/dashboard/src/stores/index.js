import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import toursReducer from './sllices';

const store = configureStore({
    reducer: {
        tours: toursReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
