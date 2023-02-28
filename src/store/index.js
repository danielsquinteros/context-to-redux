import { configureStore } from "@reduxjs/toolkit";

import superheroReducerSlice from "./superheroSlice";

export default configureStore({
    reducer: {
        superheroReducer: superheroReducerSlice
    }
})