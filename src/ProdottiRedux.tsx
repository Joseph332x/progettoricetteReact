import axios from 'axios'

import { Provider, useDispatch, useSelector } from "react-redux"
import  { State,store } from './ricette_redux/store'
import { useEffect } from 'react'

import { set } from "./ricette_redux/ricetteSlice"
import { toggle } from "./ricette_redux/preferitiSlice"


import Card from './components/Card' 
import { togglea } from './ricette_redux/themeSlice'
import { areaFlags, areas, setArea } from './ricette_redux/areaSlice'
import { initFlowbite } from 'flowbite'


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
    const area=useSelector((state: State) => state.area.value);

       useEffect(() => {
       axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            .then((response) => {
                dispatch(set(response.data.meals))
            })
    }, [area])



    useEffect(() => {
  const html = document.documentElement;
  if (theme === "dark") {
    html.style.backgroundColor = "#121212"; 
  } else {
    html.style.backgroundColor = "#ffffff";
  }
}, [theme]);

  useEffect(() => {
    initFlowbite();
}, []);



   return (
    <>
    <div className="relative">
    <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
    >
        {area}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>
    <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {areas.map((a) => (
                <li key={a}>
                    <button
                        onClick={() => dispatch(setArea(a))}
                        className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        {areaFlags[a]} {a}
                    </button>
                </li>
            ))}
        </ul>
    </div>
</div>
      
      
      <button onClick={() => dispatch(togglea())}>Dark Mode</button>
      <div> {preferiti.length}</div> 
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
            <p>Caricamento..</p>
          )}
        </div>
      </div>
    </>
  );
};