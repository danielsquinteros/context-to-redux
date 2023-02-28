import { configureStore } from "@reduxjs/toolkit";

import * as superhero from "./superheroSlice";

export default configureStore({
    reducer: {
        superhero: superhero.superheroReducers
    }
})