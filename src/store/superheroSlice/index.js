import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bio: {},
    isFetchingBio: false,
    error: undefined
}

const superheroSlice = createSlice({
    name: "superhero",
    initialState,
    // reducers y actions que estoy creando al mismo tiempo
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
    successFetchingBioSlice,
    errorFetchingBioSlice
} = superheroSlice.actions

export default superheroSlice.reducer;