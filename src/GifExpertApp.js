import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = ()=> {

    const [categories,setCategories] =  useState( ['One punch'] );
    
   // const handleAdd = () => {

        //setCategories([...categories , 'Naruto']);
        //setCategories( categories => [...categories , 'Naruto']);

    //}

    return (
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories ={setCategories}/>
        <hr></hr>


        <ol>
            
            {
                categories.map(category => {
                    return <GifGrid 
                            category={category}
                            key = {category}/> //key = ido forma de identificar el componente
                })
            }

        </ol>

      </>
    ) 
  
  };

  export {
    GifExpertApp
  };