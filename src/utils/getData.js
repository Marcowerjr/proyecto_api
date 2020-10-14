const API = 'https://thesimpsonsquoteapi.glitch.me/quotes/'

// condicion ? resultado true : resultado false
const getData = async() =>{
    const apiURL = `${API}`;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error){
        console.log('fetch error', error)
    }
}

export default getData