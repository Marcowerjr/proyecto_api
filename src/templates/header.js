const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1> <a href='/proyecto_api'> API Simpsons </a>  </h1>
            </div>
            <div class="Header-nav">
                <a href="/proyecto_api"/>
                    Recargar personaje
                </a>
            </div>
        </div>
    `
    return view
}

export default Header