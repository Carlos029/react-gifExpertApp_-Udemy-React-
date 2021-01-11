import React, {useState,useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([])\
    const {data: images ,loading} = useFetchGifs(category);
    //data: images = renombrar la constante
   

    return (

        <>
        
        <h3 className="animate__animated animate__fadeIn">{category}</h3> 

        {loading && <p className="card animate__animated animate__flash">Loading...</p> }

        { <div className="card-grid">
                {
                    //images.map( {id, title} => {
                     //   return <li key = {id}> {tittle} </li>   aqui nada mas estaba enviando un item por cada nombre de la imagen
                  //  } )


                   images.map( img => {
                      return <GifGridItem
                                key = {img.id}
                                {...img}  //otra forma de enviar y usar un props para poder usar destructuracion al enviar el objeto
                            />   
                   } )

                }
        </div> }
        </>
       
    )
}
