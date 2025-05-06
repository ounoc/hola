const casas = []

let menu = "inicio"

/*----------------GRID CREATION---------------*/

let container = document.createElement("div")
container.id="container"

//top
let gridTop= document.createElement("div")
gridTop.id="gridTop"
let gridTopRight = document.createElement("div")
gridTopRight.id = "gridTopRight"
let gridTopLeft = document.createElement("div")
gridTopLeft.id = "gridTopLeft"

//center
let gridCenter = document.createElement("div")
gridCenter.id="gridCenter"
let divCenterLeft = document.createElement("div")
divCenterLeft.id="divCenterLeft"
let divCenterCenter = document.createElement("div")
divCenterCenter.id="divCenterCenter"
let divCenterRight = document.createElement("div")
divCenterRight.id="divCenterRight"

//bot
let gridBot = document.createElement("div")
gridBot.id="gridBot"

/*----------------FUNCIONES---------------*/
function updateGridCenter() {
    switch(menu){
        case "inicio":
            divCenterLeft.innerHTML = ""

            divCenterCenter.innerHTML = `
            <label id="tittleCenter">Bienvenido a DR</label>
            `
            divCenterRight.innerHTML = ""
        break;
            
        case "propiedades":
            divCenterLeft.innerHTML =   `                  
                <div id="seleccionador">
                </div>
            `

            divCenterCenter.innerHTML = `
                <label id="tittleCenter">Aquí se mostraran todas las propiedades</label>
            `
            divCenterRight.innerHTML = ""
        break;

            case "contacto": 
            divCenterLeft.innerHTML = ""
            divCenterCenter.innerHTML = ""
            divCenterRight.innerHTML = ""
        break;
    }
}

function botonMasFunction(){
    let masDiv = document.createElement("div")
    masDiv.id="masDiv"
    let masDivHTML = `
    <button id="botonCerrarGridMas">✕</button>
    <p></p>
    <button class="botonGridMas" id="botonInicio">Inicio</button>
    <p></p>
    <button class="botonGridMas" id="botonPropiedades">Propiedades</button>
    <p></p>
    <button class="botonGridMas" id="botonContacto">Contacto</button>
    `
    masDiv.innerHTML = masDivHTML

    container.appendChild(masDiv)

    let botonCerrarGridMas = document.getElementById("botonCerrarGridMas")
    botonCerrarGridMas.onclick = () => {
        masDiv.classList.add("out")
        let timeout = setTimeout(() => {
            masDiv.remove();
        },500) 
    }
    let botonGridInicio = document.getElementById("botonInicio")
    botonGridInicio.onclick = () => {
        menu = "inicio"
        updateGridCenter()
        masDiv.classList.add("out")
        let timeout = setTimeout(() => {
            masDiv.remove();
        },500)
    }
    let botonGridPropiedades = document.getElementById("botonPropiedades")
    botonGridPropiedades.onclick = () => {
        menu = "propiedades"
        updateGridCenter()
        masDiv.classList.add("out")
        let timeout = setTimeout(() => {
            masDiv.remove();
        },500) 
    }
    let botonGridContacto = document.getElementById("botonContacto")
    botonGridContacto.onclick = () => {
        menu = "contacto"
        updateGridCenter()
        masDiv.classList.add("out")
        let timeout = setTimeout(() => {
            masDiv.remove();
        },500) 
    }
    console.log(menu)
}

/*----------------CODE---------------*/

let botonIngresarAdmin = document.createElement("button")
botonIngresarAdmin.classList="adminButton"
botonIngresarAdmin.textContent="Ingresar"

botonIngresarAdmin.onclick = () => {
    window.location.href = "admin.HTMl"
}

let gridTopLeftHTML = `
    <button id="botonMas">
        <svg width="24" height="24" viewBox="0 0 100 80" fill="white">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
        </svg>
    </button>
    <img src="logo.png" href="index.html">
`
let gridBotHTML = `
    <label> © Nombre del dominio</label>
    <a href="https://x.com/SantiSoveron" target="_blank">
        <i class="fab fa-x-twitter"></i>
    </a>
`
gridTopLeft.innerHTML = gridTopLeftHTML
gridBot.innerHTML = gridBotHTML

updateGridCenter()
/*----------------appendChild---------------*/
document.body.appendChild(container)

container.appendChild(gridTop)
container.appendChild(gridCenter)
container.appendChild(gridBot)

gridTop.appendChild(gridTopLeft)
gridTop.appendChild(gridTopRight)

gridCenter.appendChild(divCenterLeft)
gridCenter.appendChild(divCenterCenter)
gridCenter.appendChild(divCenterRight)

gridTopRight.appendChild(botonIngresarAdmin)

/*----------------xd---------------*/

let botonMasGrid = document.getElementById("botonMas")
botonMasGrid.onclick = () => { 
    botonMasFunction()
}