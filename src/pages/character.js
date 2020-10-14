import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  // const character = await getData(id);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Character name: <span>${character}</span></h3>
        <h3>Quote: <span>${quote}</span></h3>
        <h3>characterDirection: <span>${characterDirection}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;