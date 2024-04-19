 export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QpdSHL3CVFGKAYzhjmpzoY8E00mW6lk2&q=valorant=${ category }&limit=10`;
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id, 
      tittle: img.tittle,
      url: img.images.downsized_medium.url
    }))
  
  //console.log( gifs );
  return gifs;
  
  }
  