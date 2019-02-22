let API = url => {
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      let people = myJson.results
      let peopleName = document.createElement('p')
      peopleName.innerHTML = people.name
      people.map((value, index) => {
        // console.log('valeur :', value, ' et mon index est : ', index)
      })
    })
}
let apiPeople = API('https://swapi.co/api/people')
let apiStarships = API('https://swapi.co/api/starships')
let apiPlanets = API('https://swapi.co/api/planets')

let peopleZone = document.querySelector('.people-zone')
let planetsZone = document.querySelector('.planets-zone')
let starshipsZone = document.querySelector('.starships-zone')

let peopleScreen = peopleZone.querySelector('.screen')
let planetsScreen = planetsZone.querySelector('.screen')
let starshipsScreen = starshipsZone.querySelector('.screen')

let mySpan = document.createElement('span')
mySpan.innerHTML = 'Je suis un span element'
mySpan.classList.add('nouvelle-classe')

//On vient de creer un nouvel element
console.log(mySpan)

peopleScreen.appendChild(mySpan)
planetsScreen.appendChild(mySpan)
starshipsScreen.appendChild(mySpan)

// let namePeople = document.createElement('li')
// namePeople.innerHTML = people.name
// console.log(namePeople)
