import { createSlice } from "@reduxjs/toolkit";
import { superheroBio } from "./actions";

const initialState = {
    bio: {},
    isFetchingBio: false,
    error: undefined
}

const slice = createSlice({
    name: "superhero",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(superheroBio.pending, (state) => {
            state.isFetchingBio = true;
        })
        .addCase(superheroBio.fulfilled, (state, action) => {
            console.log(action);
            state.isFetchingBio = false;
            state.error = false;
            state.bio = action.payload.bio;
        })
        .addCase(superheroBio.rejected, (state, action) => {
            state.error = action.payload.error;
            state.isFetchingBio = false;
        })
    }
})

//Vuelvo a exportar el thunk
export { superheroBio };

//Exporto el redux para luego pasarlo al state
export default slice.reducer;