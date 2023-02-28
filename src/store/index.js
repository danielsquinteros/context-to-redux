import { configureStore } from "@reduxjs/toolkit";

import superheroReducer from "./reducers/superhero";

export default configureStore({
    reducer: {
        superheroReducer
    }
})