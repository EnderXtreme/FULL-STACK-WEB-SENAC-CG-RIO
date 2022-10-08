// API endpoint
const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

//Get Elements
const searchInput = getElement(".search-input"),
      searchButton=getElement(".search-button"),
      container = getElement(".pokemon"),
      errorMessage=getElement(".error");

var pokeName, //Nome ou numero passado na caixa de busca
    pokemon, //Responsável por aguardar os dados recebidos do API
    card; // Responsável por receber o HTML

// Build Functions

//Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

//Função responsável por fazer requisições para a API e inserir as repostas na variavél pokemon
function requestPokeInfo(url, name) {
  fetch(url + name)
  .then(response => response.json())
  .then(data => { pokemon=data;})
  .catch(err => console.log(err));
}
//Função que faz a chamada das principais funções e inicia o APP
function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout (function () {
    container.innerHTML = createCard();
  }, 2000);
}

//Add Events
searchButton.AddEventListener('click', event => {event.preventDefault()
  pokeName = searchInput.value.toLowerCase()
  startApp(pokeName);
});

// Função responsavel por montar o HTML exibido na pagina
function createCard () {
  card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
        <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
    </div>`;
  return card;
}