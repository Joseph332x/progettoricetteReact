import axios from 'axios'
import  { Meal } from './models/Meal'

import { Provider, useDispatch, useSelector } from "react-redux"
import  { State,store } from './ricette_redux/store'
import { useEffect } from 'react'

import { set } from "./ricette_redux/ricetteSlice"
import { toggle } from "./ricette_redux/preferitiSlice"


import preferitiIcon from '../src/assets/favorite.svg'
import notPreferitiIcon from '../src/assets/not-favorite.svg'
import Card from './components/Card' 


export const ProdottiRedux=()=>{

return (<Provider store={store}>
        <ProdottiLista  />
    </Provider>)    

}


const ProdottiLista = () => {
    const dispatch = useDispatch();
    
    const meal = useSelector((state: State) => state.meal.value);
    const preferiti = useSelector((state: State) => state.preferiti.value);
    
    useEffect(() => {
        axios.get<Meal[]>("https://www.themealdb.com/api/json/v1/1/filter.php?a=italian")
            .then((response) => {
                dispatch(set(response.data.meals))
            })
    }, [])

   return (
    <>
      <div>Numero preferiti: {preferiti.length}</div> {/* Modificato per chiarezza */}

      {/* 1. Il container principale della pagina/sezione */}
      <div className="container mx-auto p-4">
        {/* 2. L'elemento che funge da CONTENITORE GRID per TUTTE le card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> {/* Aggiunto lg:grid-cols-4 come esempio */}
          {meal.length > 0 ? (
            meal.map(item => (
              <Card
                key={item.idMeal}
                id={item.idMeal}
                title={item.strMeal}
                img={item.strMealThumb}
                isPreferito={preferiti.includes(Number(item.idMeal))} // Assicurati che preferiti contenga IDs numerici se idMeal è stringa
                onToggle={() => dispatch(toggle(Number(item.idMeal)))}
              />
            ))
          ) : (
            <p>Caricamento dei pasti o nessun pasto da mostrare...</p> // Messaggio di fallback
          )}
        </div>
      </div>
    </>
  );
};