// Functions and associated event listeners

// Clears page to make room for search results and new categories.
function clearGrid(){
    let grid = document.querySelector('#content')
    grid.innerHTML = ''
}

//Displays detailed card when the user clicks on the card.
function showDetails(){
    let detailsArray = Array.from(this.childNodes)
    console.log(detailsArray)
    document.querySelector('#contentName').innerText = `${detailsArray[0]['innerHTML']}`
    document.querySelector('#contentImage').src = `${detailsArray[1]['currentSrc']}`
    document.querySelector('#contentImage').alt = `${detailsArray[1]['alt']}`
    document.querySelector('#contentText').innerText = `${detailsArray[2]['innerHTML']}`
    document.querySelector('.botwItemWindow').classList.toggle('botwHidden')
    document.querySelector('.botwItemWindow').classList.toggle('botwHiddenZ')
    document.querySelector('.botwFullWindow').classList.toggle('botwFullWindowOn')
}

//Hides card display window when you click out of the card display 
document.querySelector('.botwFullWindow').addEventListener('click', hideDetails)

function hideDetails(){
    document.querySelector('.botwItemWindow').classList.toggle('botwHidden')
    document.querySelector('.botwItemWindow').classList.toggle('botwHiddenZ')
    document.querySelector('.botwFullWindow').classList.toggle('botwFullWindowOn')
}


// Displays all monsters on grid in as cards
document.querySelector('.showMonsters').addEventListener('click', displayMonsters)

async function displayMonsters(){
    clearGrid()
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
    let data = await res.json()
    let monsters = data.data
    console.log(monsters)

    monsters.forEach(monster => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(#bf0000, #000000)'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${monster.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${monster.image}" alt="${monster.name}"><p class='overflow'>${monster.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

// Displays all Creatures on grid in as cards
document.querySelector('.showCreatures').addEventListener('click', displayCreatures)

async function displayCreatures(){
    clearGrid()
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`)
    let data = await res.json()
    let creatures = data.data
    console.log(creatures['food'])
    console.log(creatures['non_food'])

    creatures['food'].forEach(creature => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(rgb(0 255 235), rgb(0 0 0))'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${creature.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${creature.image}" alt="${creature.name}"><p class='overflow'>${creature.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })

    creatures['non_food'].forEach(creature => {
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

async function displayTreasure(){
    clearGrid()
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`)
    let data = await res.json()
    let treasures = data.data
    console.log(treasures)

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

async function displayMaterials(){
    clearGrid()
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
    let data = await res.json()
    let materials = data.data
    console.log(materials)

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

async function displayEquipment(){
    clearGrid()
    let res = await  fetch(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`)
    let data = await res.json()
    let equipments = data.data
    console.log(equipments)

    equipments.forEach(equipment => {
        let li = document.createElement('li')
        li.style.background = 'radial-gradient(white, rgb(54 54 54))'
        li.classList.add('contentItem')
        li.innerHTML = `<h2>${equipment.name.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')}</h2><img src="${equipment.image}" alt="${equipment.name}"><p class='overflow'>${equipment.description}</p>`
        document.querySelector('#content').appendChild(li)
        li.addEventListener('click', showDetails)
    })
}

displayMonsters()

