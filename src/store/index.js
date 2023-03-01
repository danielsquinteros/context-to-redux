import { configureStore } from "@reduxjs/toolkit";

import superhero from "./reducers/superhero";

export default configureStore({
    reducer: {
        superhero: superhero
    }
})