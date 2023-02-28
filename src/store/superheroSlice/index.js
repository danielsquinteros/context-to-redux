import { useDispatch, useSelector } from "react-redux";
import * as actions from './superheroSlice'
import superheroReducers from "./superheroSlice"

const useSupehero = useDispatch;

const useSelectorSuperhero = () => {
    useSelector((state) => {
        return state.superhero
    })
}

export {
    useSupehero, useSelectorSuperhero, superheroReducers, actions
}