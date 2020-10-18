/*
Este código consiste en llamar la URL de la API y obtener los datos de la API, para
eso utilizamos un TryCatch que consiste en buscar la API, si es encontrada, éste buscará los datos que contiene dicha API,
si no los encuentra, tendremos un error de búsqueda.
*/

const API = 'https://thesimpsonsquoteapi.glitch.me/quotes/'

// condicion ? resultado true : resultado false
const getData = async() =>{
    const apiURL = `${API}`;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data[0];
    }catch (error){
        console.log('fetch error', error)
    }
}
export default getData