// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

//API

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((json) => {
    printPokemons(json.results);
  });

function printPokemons(pokemons) {
  console.log(pokemons);
  const search = document.getElementById("search");
  pokemons.forEach((pokemon) => {
    search.innerHTML = `
    ${search.innerHTML}
    <div class="card">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(
        pokemon.url
      )}.png"/>
      <span>N°.${getPokemonId(pokemon.url)}</span>
      <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </div>
    `;
  });
}

function getPokemonId(url) {
  return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "");
}