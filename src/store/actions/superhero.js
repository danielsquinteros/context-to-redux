import { createAction } from "@reduxjs/toolkit";
import api from "../../context/api";

export const startFetchingBio = createAction("START_FETCHING_BIO")
export const errorFetchingBio = createAction("ERROR_FETCHING_BIO")
export const successFetchingBio = createAction("SUCCESS_FETCHING_BIO")

export const fetchBioThunk = (id) => async(dispatch) => {
    try {
        dispatch(startFetchingBio({}))
        const bioData = await  api.Superhero.getBio(id);
        dispatch(successFetchingBio({
            bio: bioData.data,
        }))
        
    } catch (error) {
        dispatch(errorFetchingBio({error}))
    }
}