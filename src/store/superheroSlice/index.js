import { useDispatch, useSelector } from "react-redux";
import * as actions from './superheroSlice'
import superheroReducers from "./superheroSlice"

const useSuperhero = useDispatch;

const useSelectorSuperHero = () => useSelector((state) =>  state.superhero )

export {
    useSuperhero, useSelectorSuperHero, superheroReducers, actions
}