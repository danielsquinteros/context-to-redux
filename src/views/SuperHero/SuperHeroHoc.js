import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSuperHero } from "../../context/SuperHeroContext";

const SuperHeroHoc = (SuperHero) => function SuperHeroHoc() {
    const [{isFetching, isError, superhero} , { getSuperHero }] = useSuperHero();
    const { id } = useParams()

    useEffect(() => {
        id && getSuperHero(id);
    }, [id])
    
    const renderContent = () => {
        if(isFetching){
            return <h1>Cargando...</h1>
        }
        if(isError){
            return <h1>{isError}</h1>
        }
        if(superhero){
            return(
                <SuperHero
                name={superhero['full-name']}
                id={superhero['id']}
                alterEgos={superhero['alter-egos']}
                />
            )
        }
        return null;
    }
    
  return renderContent();
};

export default SuperHeroHoc