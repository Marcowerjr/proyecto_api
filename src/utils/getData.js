const API = 'https://thesimpsonsquoteapi.glitch.me/quotes/'
// condicion ? resultado true : resultado false
const getData = async(id) =>{
    const apiURL = id ? `${API}${id}` : API+'?count=2';
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error){
        console.log('fetch error', error)
    }
}

export default getData