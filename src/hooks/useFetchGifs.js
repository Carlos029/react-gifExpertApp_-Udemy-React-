import {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';


const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data : [],
        loading : true
    })

          useEffect( () => { //useEffect permite ejecutar cieto codigo de fomra condicional 
         getGifs (category)
         .then(imgs => {

           

            setState({
                data : imgs,
                loading : false
            });
                
            
             
         });
      } , [category]);  //el segundo argumento que se le manda al use Effect es un arreglo [] de dependencias. 
                 // si esta vacio se lanza solo 1 vez al momento que se renderiza por 1era vez
                 //cuado cambia el category que esta en el array [], se dispara lo que esta dentro del useEffect

  

    return state; //la primera vez que se llama a esta fucion retorna objeto {data:[], loading : true}

}

export {
    useFetchGifs
}