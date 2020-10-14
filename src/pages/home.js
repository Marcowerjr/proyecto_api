//template base del home

import getData from '../utils/getData'

const Home = async () =>{
    const characters = await getData()
    const view = `
    <div class = "Characters">
        ${characters.results.map(character =>`
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>
                </a>
            </article>
            `
        ).join('')}
    </div>
    `;

    return view;

};


export default Home;
