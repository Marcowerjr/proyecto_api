import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(getHash());
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Character name: <span>${character.character}</span></h3>
        <h3>Quote: <span>${character.quote}</span></h3>
        <h3>characterDirection: <span>${character.characterDirection}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;