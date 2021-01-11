import React from 'react'

export const GifGridItem = ( {id, tittle, url} ) => {  //otra forma de enviar y usar un props al enviar un objeto

    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={ tittle} ></img>
            <p>{tittle}</p>
        </div>
    )
}
