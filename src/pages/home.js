//template base del home

import getData from '../utils/getData'

const Home = async () =>{
    const characters = await getData()
    const view = `
    <div class = "Characters">
        ${characters.results.map(character =>`
            <article class="Character-item">
                <a href="#/character/">
                    <img src="${image}" alt="${name}">
                    <h3>${name}</h3>
                </a>
            </article>
            `
        ).join('')}
    </div>
    `;

    return view;

};


export default Home;
