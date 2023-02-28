
import React, { useEffect } from "react";
import { useParams } from "react-router";
import {  useSupehero, useSelectorSuperhero, actions } from "../../store/superheroSlice"

const SuperHeroHoc = (SuperHero) => function SuperHeroHoc() {
    const dispatch = useSupehero();
    const { bio, isFetchingBio, error } = useSelectorSuperhero()
    const { id } = useParams()

    console.log(bio)

    useEffect(() => {
        id && dispatch(actions.superheroBio(id));
    }, [id])
    
    const renderContent = () => {
        if(isFetchingBio){
            return <h1>Cargando...</h1>
        }
        if(error){
            return <h1>{error}</h1>
        }
        if(bio){
            return(
                <SuperHero
                name={bio['full-name']}
                id={bio['id']}
                alterEgos={bio['alter-egos']}
                />
            )
        }
        return null;
    }
    
  return renderContent();
};

export default SuperHeroHoc
