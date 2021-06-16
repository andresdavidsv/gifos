const APIKEY = 'RWVkZREvkw7s2w320Kzqyh56QFR9SVr4';

function searchGifo() {
  document.getElementById('searchBtn').addEventListener('click', (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`;
    let str = document.getElementById('searchInput').value.trim();
    url = url.concat(str);
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.data
          .map((gif) => gif.images.downsized.url)
          .forEach((url) => {
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = url;
            document.body.appendChild(img);
          });

        // img.src = gif.data[0].images.downsized.url;
        // img.alt = gif.data[0].title;
        // fc.textContent = gif.data[0].title;
        // fig.appendChild(img);
        // fig.appendChild(fc);
        // let out = document.querySelector('out');
        // out.insertAdjacentElement('afterbegin', fig);
        // document.querySelector()
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

searchGifo();

fetch(API_URL)
  .then((response) => response.json())
  .then((json) => {
    printPokemons(json.results);
  });

function printPokemons(pokemons) {
  const search = document.getElementById('search');
  pokemons.forEach((pokemon) => {
    search.innerHTML = `
    ${search.innerHTML}
    <div class="card">
      <img src="${API_IMG_URL}${getPokemonId(pokemon.url)}.png"/>
      <span>N°.${getPokemonId(pokemon.url)}</span>
      <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </div>
    `;
  });
}

function getPokemonId(url) {
  return url.replace(API_URL, '').replace('/', '');
}
