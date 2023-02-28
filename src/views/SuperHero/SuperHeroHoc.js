
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { bioSel, errorSel, isFetchingSel } from "../../store/selectors/superhero";
import { fetchBioThunkSlice } from "../../store/superheroSlice/actions";

const SuperHeroHoc = (SuperHero) => function SuperHeroHoc() {
    // Dispara el thunk
    const dispatch = useDispatch()
    // Selectores me muestra el state
    const biography = useSelector(bioSel)
    const error = useSelector(errorSel)
    const isFetching = useSelector(isFetchingSel)

    const { id } = useParams()

    useEffect(() => {
        id && dispatch(fetchBioThunkSlice(id));
    }, [id])
    
    const renderContent = () => {
        if(isFetching){
            return <h1>Cargando...</h1>
        }
        if(error){
            return <h1>{error}</h1>
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
