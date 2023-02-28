import api from "../../context/api"
import { startFetchingBioSlice, successFetchingBioSlice, errorFetchingBioSlice } from "../superheroSlice"

export const fetchBioThunkSlice = (id) => async(dispatch) => {
    try {
        dispatch(startFetchingBioSlice({}))
        const bioData = await api.Superhero.getBio(id)
        dispatch(successFetchingBioSlice({
            bio: bioData.data
        }))
    } catch (error) {
        dispatch(errorFetchingBioSlice({error}))
    }
}