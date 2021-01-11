const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=eu1yphoD2tt3yVskm0R01WHKgZx4X61e`; //encodeUri por si lo escirto tiene espacios, para que los concatenen como tiene que se ser [ej: one punch = one+punch]
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {

        return{
            id: img.id,
            tittle: img.title,
            url: img.images.downsized_medium.url
        } 
    })
    
    return gifs;
}

export {
    getGifs
}