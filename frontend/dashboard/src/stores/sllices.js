import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],

};

const todosSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {

    },
});

export const { } = todosSlice.actions;
export default todosSlice.reducer;
