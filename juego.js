document.addEventListener('DOMContentLoaded', () => {

const cardarray = [
    {
        name: 'osito',
        img: 'img/caramelo.png'
    },
    {
        name: 'bomba',
        img: 'img/bomba.png'

    }

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector.apply('.grid')
const resultDisplay = document.querySelector('#puntos')
let cardsElegir = []
let cardsElegirId = []
let cardspuntos = []

function tablero() {
    for (let i = 0; i < cardarray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'img/frontcard.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}




    
})