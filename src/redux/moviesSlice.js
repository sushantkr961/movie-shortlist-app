import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'shortlistedMovies',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            if (!state.find(movie => movie.id === action.payload.id)) {
                state.push(action.payload);
            }
        },
        removeMovie: (state, action) => {
            return state.filter(movie => movie.id !== action.payload.id);
        },
    },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
