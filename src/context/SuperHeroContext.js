/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from 'react';
import api from './api';

//Creamos el contexto
const SuperHeroContext = React.createContext(undefined);

//Creamos el provider
const SuperHeroProvider = ({ children }) => {
    //Creamos state que luego vamos a pedir en el HOC
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState('');
  const [superhero, setSuperhero] = useState([]);

  const getSuperHero = async (id) => {
    try {
        setIsFetching(true);
        const response = await api.Superhero.getBio(id)
        setSuperhero(response.data)
        setIsFetching(false);
    } catch (error) {
        setIsError({error})
    }

  }

  const state = [
    //Primer objeto -> solo state
    {
      isFetching, isError, superhero
    },
    // Segundo objeto -> funciones que cambian los state
    {
      getSuperHero,
    }
  ];

  return (
    <SuperHeroContext.Provider value={state}>
      {children}
    </SuperHeroContext.Provider>
  );
};

const useSuperHero = () => {
  const context = useContext(SuperHeroContext);
  if (context === undefined) {
    throw new Error('useSuperHero can only be used inside SupHeroProvider');
  }
  return context;
};

export {
    SuperHeroProvider,
    useSuperHero
};
