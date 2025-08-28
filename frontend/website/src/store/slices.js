import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    someTourState: [],
};

const toursSlice = createSlice({
    name: 'tours',
    initialState,
    reducers: {
        setTours: (state, action) => {
            state.someTourState = action.payload;
        },
    },
});

export const { setTours } = toursSlice.actions;
export default toursSlice.reducer;
