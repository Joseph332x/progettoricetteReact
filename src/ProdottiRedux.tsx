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
import { togglea } from './ricette_redux/themeSlice'


export const ProdottiRedux=()=>{

return (<Provider store={store}>
        <ProdottiLista  />
    </Provider>)    

}


const ProdottiLista = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: State) => state.theme.value);

    const meal = useSelector((state: State) => state.meal.value);
    const preferiti = useSelector((state: State) => state.preferiti.value);
    
    useEffect(() => {
        axios.get<Meal[]>("https://www.themealdb.com/api/json/v1/1/filter.php?a=italian")
            .then((response) => {
                dispatch(set(response.data.meals))
            })
    }, [])


  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);



   return (
    <>
      <div>Numero preferiti: {preferiti.length}</div> 
      <span>Tema Corrente: {theme}</span>
      <button onClick={() => dispatch(togglea())}>Toggle</button>
    
      <div className="container mx-auto p-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
          {meal.length > 0 ? (
            meal.map(item => (
              <Card
                key={item.idMeal}
                id={item.idMeal}
                title={item.strMeal}
                img={item.strMealThumb}
                isPreferito={preferiti.includes(Number(item.idMeal))} 
                onToggle={() => dispatch(toggle(Number(item.idMeal)))}
              />
            ))
          ) : (
            <p>Caricamento dei piatti..</p>
          )}
        </div>
      </div>
    </>
  );
};