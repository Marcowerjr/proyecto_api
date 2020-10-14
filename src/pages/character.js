import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(0);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.character}">
        <h2>${character.character}</h2>
      </article>
      <article class="Characters-card">
        <h3>Nombre: <span>${character.character}</span></h3>
        <h3>Frase célebre: <span>${character.quote}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
