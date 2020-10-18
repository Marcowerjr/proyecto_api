/*
Este código consiste en mostrar el nombre del sitio y el botón para recargar 
el sitio con otro personaje en el Header del sitio web.
*/
const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1> API Simpsons </h1>
            </div>
            <div class="Header-nav">
                <a href="/"/>
                    Recargar personaje
                </a>
            </div>
        </div>
    `
    return view
}

export default Header