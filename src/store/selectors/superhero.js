export const bioSel = (state) =>  {
    return state.superheroReducer.bio
}
export const errorSel = (state) =>  {
    return state.superheroReducer.error
}
export const isFetchingSel = (state) =>  {
    return state.superheroReducer.isFetchingBio
}