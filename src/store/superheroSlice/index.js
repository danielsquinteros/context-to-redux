import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bio: {},
    isFetchingBio: false,
    error: undefined
}

const superheroSlice = createSlice({
    name: "superhero",
    initialState,
    reducers: {
        startFetchingBioSlice: (state) => {
            state.isFetchingBio = true;
            state.bio = {};
            state.error = undefined;
        },
        successFetchingBioSlice: (state, action) => {
            state.isFetchingBio = false;
            state.bio = action.payload.bio;
        },
        errorFetchingBioSlice: (state, action) => {
            state.isFetchingBio = false;
            state.error = action.payload.error;
        }
    }
})

export const {
    startFetchingBioSlice, 
    successFetchingBio,
    errorFetchingBio
} = superheroSlice.actions

export default superheroSlice.reducer;