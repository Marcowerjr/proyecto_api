import Header from '../templates/header'
import Home from '../pages/home'
import Character from '../pages/character'
import error404 from '../pages/error'

//Utils
import getHash from '../utils/getHash'
import getData from '../utils/getData'
import resolveRoute from '../utils/resolveRoutes'

const routes = {
    '/': Character
}

const router = async () =>{
    const header = null || document.getElementById('Header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoute(hash)

    let render = routes[route] ? routes[route] : error404

    content.innerHTML = await Character()
}

export default router