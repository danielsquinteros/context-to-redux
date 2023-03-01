import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchBioThunk } from "../../store/actions/superhero";
import { isFetchingBioSel, bioSel, superheroesErrSel } from "../../store/selectors/superhero";

const SuperHeroHoc = (SuperHero) => function SuperHeroHoc() {
    const dispatch = useDispatch()
    const biography = useSelector(bioSel)
    const isFetchingBio = useSelector(isFetchingBioSel)
    const biographyErr = useSelector(superheroesErrSel)
    const { id } = useParams()

    useEffect(() => {
        id && dispatch(fetchBioThunk(id));
    }, [id])

    console.log(isFetchingBioSel,bioSel, superheroesErrSel )
    
    const renderContent = () => {
        if(isFetchingBio){
            return <h1>Cargando...</h1>
        }
        if(biographyErr){
            return <h1>{biographyErr}</h1>
        }
        if(biography){
            return(
                <SuperHero
                name={biography['full-name']}
                id={biography['id']}
                alterEgos={biography['alter-egos']}
                />
            )
        }
        return null;
    }
    
  return renderContent();
};

export default SuperHeroHoc