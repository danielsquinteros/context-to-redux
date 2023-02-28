import { createReducer } from "@reduxjs/toolkit";

import {
    startFetchingBio,
    errorFetchingBio,
    successFetchingBio
} from '../actions/superhero'

const initialState = {
    bio: {},
    isFetchingBio: false,
    error: undefined
}

const superheroReducer = createReducer(initialState, builder => {
    builder
    .addCase(startFetchingBio.toString(), (state, action) => {
        return {
            ...state,
            isFetchingBio: true,
            bio: {},
            error: undefined
        }
    })
    .addCase(successFetchingBio.toString(), (state, action) => {
        console.log(action)
        return {
            ...state,
            isFetchingBio: false,
            bio: action.payload.bio,
        }
    })
    .addCase(errorFetchingBio.toString(), (state, action) => {
        return {
            ...state,
            isFetchingBio: false,
            error: action.payload.error,
        }
    })
})

export default superheroReducer;