// Global variables
let itemWindow = document.querySelector('.botwItemWindow')

// Functions and associated event listeners

// Clears page to make room for search results and new categories.
function clearGrid(){
    let grid = document.querySelector('#content')
    grid.innerHTML = ''
}

//Displays detailed card when the user clicks on the card.
function showDetails(){
    let detailsArray = Array.from(this.childNodes)
    document.querySelector('#contentName').innerText = `${detailsArray[0]['innerHTML']}`
    document.querySelector('#contentImage').src = `${detailsArray[1]['currentSrc']}`
    document.querySelector('#contentImage').alt = `${detailsArray[1]['alt']}`
    document.querySelector('#contentText').innerText = `${detailsArray[2]['innerHTML']}`
    document.querySelector('.botwItemWindow').classList.toggle('botwHidden')
    document.querySelector('.botwFullWindow').classList.toggle('botwFullWindowOn')
}

//Hides card display window when you click out of the card display 
document.querySelector('.botwFullWindow').addEventListener('click', hideDetails)

function hideDetails(){
    document.querySelector('.botwItemWindow').classList.toggle('botwHidden')
    document.querySelector('.botwFullWindow').classList.toggle('botwFullWindowOn')
}


// Displays all monsters on grid in as cards
document.querySelector('.showMonsters').addEventListener('click', displayMonsters)
let monsters

async function displayMonsters(){
    clearGrid()
    searchBar.value = ''
    itemWindow.style.background = 'radial-gradient(#bf0000, #000000)'
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
    let data = await res.json()
    monsters = data.data
    monsters.sort((monster1, monster2) => monster1.name.localeCompare(monster2.name))
    // console.log(monsters)

    monsters.forEach(monster => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(#bf0000, #000000)'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${monster.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${monster.image}" alt="${monster.name}"><p class='overflow'>${monster.description} </p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

// Displays all Creatures on grid in as cards
document.querySelector('.showCreatures').addEventListener('click', displayCreatures)
let creatures
let nonFood
let food

async function displayCreatures(){
    clearGrid()
    searchBar.value = ''
    itemWindow.style.background = 'radial-gradient(rgb(0 255 235), rgb(0 0 0))'
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    let data = await res.json()
    creatures = data.data
    nonFood = creatures['non_food']
    nonFood.sort((food1, food2) => food1.name.localeCompare(food2.name))
    food = creatures['food']
    food.sort((food1, food2) => food1.name.localeCompare(food2.name))
    // console.log(food, nonFood)

    nonFood.forEach(creature => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(rgb(0 255 235), rgb(0 0 0))'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${creature.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${creature.image}" alt="${creature.name}"><p class='overflow'>${creature.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })

    food.forEach(creature => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(rgb(0 255 235), rgb(0 0 0))'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${creature.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${creature.image}" alt="${creature.name}"><p class='overflow'>${creature.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

// Displays all treasures on grid in as cards
document.querySelector('.showTreasures').addEventListener('click', displayTreasure)
let treasures

async function displayTreasure(){
    clearGrid()
    searchBar.value = ''
    itemWindow.style.background = 'radial-gradient(#ff7200, #2b1b1b)'
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`)
    let data = await res.json()
    treasures = data.data
    treasures.sort((treasure1, treasure2) => treasure1.name.localeCompare(treasure2.name))
    // console.log(treasures)

    treasures.forEach(treasure => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(#ff7200, #2b1b1b)'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${treasure.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${treasure.image}" alt="${treasure.name}"><p class='overflow'>${treasure.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

// Displays all materials on grid in as cards
document.querySelector('.showMaterials').addEventListener('click', displayMaterials)
let materials

async function displayMaterials(){
    clearGrid()
    searchBar.value = ''
    itemWindow.style.background = 'radial-gradient(#fff200, rgb(96 96 0))'
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
    let data = await res.json()
    let materials = data.data
    materials.sort((material1, material2) => material1.name.localeCompare(material2.name))
    // console.log(materials)

    materials.forEach(material => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(#fff200, rgb(96 96 0))'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${material.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${material.image}" alt="${material.name}"><p class='overflow'>${material.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

// Displays all equipment on grid in as cards
document.querySelector('.showEquipment').addEventListener('click', displayEquipment)
let equipments

async function displayEquipment(){
    clearGrid()
    searchBar.value = ''
    itemWindow.style.background = 'radial-gradient(white, rgb(54 54 54))'
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    let data = await res.json()
    equipments = data.data
    equipments.sort((equipment1, equipment2) => equipment1.name.localeCompare(equipment2.name))
    // console.log(equipments)

    equipments.forEach(equipment => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(white, rgb(54 54 54))'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${equipment.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${equipment.image}" alt="${equipment.name}"><p class='overflow'>${equipment.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

// Allows user to search names and keywords in card.
let category = 'Monsters'
document.querySelector('.showEquipment').addEventListener('click', setCategory)
document.querySelector('.showMaterials').addEventListener('click', setCategory)
document.querySelector('.showTreasures').addEventListener('click', setCategory)
document.querySelector('.showCreatures').addEventListener('click', setCategory)
document.querySelector('.showMonsters').addEventListener('click', setCategory)


function setCategory(){
    category = this.classList[1].slice(4,)
}

let searchBar = document.querySelector('#searchBar')
searchBar.addEventListener('keyup', search)

async function search(e){
    if(e.key != 'Enter') return
    searchBarVal = searchBar.value
    let res
    let data

    switch(category){
        case 'Monsters':
            clearGrid()
            res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
            data = await res.json()
            monsters = data.data
            monsters.sort((monster1, monster2) => monster1.name.localeCompare(monster2.name))
            monsters = monsters.filter(monster => monster.name.includes(searchBarVal))
        
            monsters.forEach(monster => {
                let li = document.createElement('li')
                li.style.background = 'radial-gradient(#bf0000, #000000)'
                li.classList.add('contentItem')
                li.innerHTML = `<h2>${monster.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${monster.image}" alt="${monster.name}"><p class='overflow'>${monster.description} </p>`
                document.querySelector('#content').appendChild(li)
                li.addEventListener('click', showDetails)
            })
            break;
        case 'Creatures':
            clearGrid()
            res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
            data = await res.json()
            creatures = data.data
            nonFood.sort((food1, food2) => food1.name.localeCompare(food2.name))
            nonFood = creatures['non_food'].filter(creature => creature.name.includes(searchBarVal))
            food.sort((food1, food2) => food1.name.localeCompare(food2.name))
            food = creatures['food'].filter(creature => creature.name.includes(searchBarVal))
            // console.log(food, nonFood)
        
            nonFood.forEach(creature => {
                let li = document.createElement('li')
                li.style.background = 'radial-gradient(rgb(0 255 235), rgb(0 0 0))'
                li.classList.add('contentItem')
                li.innerHTML = `<h2>${creature.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${creature.image}" alt="${creature.name}"><p class='overflow'>${creature.description}</p>`
                document.querySelector('#content').appendChild(li)
                li.addEventListener('click', showDetails)
            })
        
            food.forEach(creature => {
                let li = document.createElement('li')
                li.style.background = 'radial-gradient(rgb(0 255 235), rgb(0 0 0))'
                li.classList.add('contentItem')
                li.innerHTML = `<h2>${creature.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${creature.image}" alt="${creature.name}"><p class='overflow'>${creature.description}</p>`
                document.querySelector('#content').appendChild(li)
                li.addEventListener('click', showDetails)
            })
            break;
        case 'Equipment':
            clearGrid()
            res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
            data = await res.json()
            equipments = data.data
            equipments.sort((equipment1, equipment2) => equipment1.name.localeCompare(equipment2.name))
            equipments = equipments.filter(equipment => equipment.name.includes(searchBarVal))
            // console.log(equipments)
        
            equipments.forEach(equipment => {
                let li = document.createElement('li')
                li.style.background = 'radial-gradient(white, rgb(54 54 54))'
                li.classList.add('contentItem')
                li.innerHTML = `<h2>${equipment.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${equipment.image}" alt="${equipment.name}"><p class='overflow'>${equipment.description}</p>`
                document.querySelector('#content').appendChild(li)
                li.addEventListener('click', showDetails)
            })
            break;
        case 'Materials':
            clearGrid()
            res = await fetch(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
            data = await res.json()
            let materials = data.data
            materials.sort((material1, material2) => material1.name.localeCompare(material2.name))
            materials = materials.filter(material => material.name.includes(searchBarVal))
            // console.log(materials)
        
            materials.forEach(material => {
                let li = document.createElement('li')
                li.style.background = 'radial-gradient(#fff200, rgb(96 96 0))'
                li.classList.add('contentItem')
                li.innerHTML = `<h2>${material.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${material.image}" alt="${material.name}"><p class='overflow'>${material.description}</p>`
                document.querySelector('#content').appendChild(li)
                li.addEventListener('click', showDetails)
            })
            break;
        default:
            clearGrid()
            res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`)
            data = await res.json()
            treasures = data.data
            treasures.sort((treasure1, treasure2) => treasure1.name.localeCompare(treasure2.name))
            treasures = treasures.filter(treasure => treasure.name.includes(searchBarVal))
            // console.log(treasures)
        
            treasures.forEach(treasure => {
                let li = document.createElement('li')
                li.style.background = 'radial-gradient(#ff7200, #2b1b1b)'
                li.classList.add('contentItem')
                li.innerHTML = `<h2>${treasure.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${treasure.image}" alt="${treasure.name}"><p class='overflow'>${treasure.description}</p>`
                document.querySelector('#content').appendChild(li)
                li.addEventListener('click', showDetails)
            })
            break;
    }
}

//default runs monsters for users the first time they enter the site
displayMonsters()

