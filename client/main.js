console.log(`hello universe`)
const displaySection = document.querySelector('#display-section')

const createPokeCard = (obj) => {
    const mainDiv = document.createElement('div')
    mainDiv.classList.add('card')
    mainDiv.style.width = '14rem'
    mainDiv.innerHTML = `
    <img src="${obj.sprites.front_shiny}" class="card-img-top" alt="${obj.name}">
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
  </div>
    `
    displaySection.appendChild(mainDiv)
}

const getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=30`)
    .then(res => {
        // console.log(res.data.results)
        res.data.results.map(pokemon => {
            axios.get(pokemon.url)
            .then(result => {
                // console.log(result.data)
                createPokeCard(result.data)
            })
            .catch(err => console.error(err))
        })
    })
    .catch(err => console.error(err))
}

document.addEventListener('DOMContentLoaded',getPokemon)