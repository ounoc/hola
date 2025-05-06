let menu = "propiedades"

let logged = false
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
divCenterCenter.style.textAlign="center"
let divCenterRight = document.createElement("div")
divCenterRight.id="divCenterRight"

//bot
let gridBot = document.createElement("div")
gridBot.id="gridBot"

let botonIngresarAdmin = document.createElement("button")
botonIngresarAdmin.classList ="adminButton"
botonIngresarAdmin.textContent="Regresar"


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

/* ---------------- Funciones ----------------- */

function menuCrear(){
  divCenterCenter.innerHTML = `
  <label>Vista Previa</label>
  <div id="divPreview">
    <div id="photoDiv">
      <label id="labelPhotoInput" for="photoInput">Ingrese las fotos</label>
      <input type="file" accept="image/*" id="photoInput" multiple style="display:none;">
      <img id="previewImg" style="margin-top:20px;">
      <div id="thumbnails" style="margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap; margin-left:20px;">
      </div>
    </div>
    <div id="textDiv">
      <label>Titulo</label>
      <input id="titleInput">
    </div>
  </div>
  `

  let input = document.getElementById("photoInput")
  let preview = document.getElementById("previewImg")
  let thumbnails = document.getElementById("thumbnails")
  let images = []

  input.addEventListener("change", () => {
    const files = Array.from(input.files)
    if (files.length > 0) {
      images = files.concat(images)
      renderThumbnails()
    }
  })

  function renderThumbnails() {
    thumbnails.innerHTML = ""

    if (images.length > 0) {
      const mainReader = new FileReader()
      mainReader.onload = e => {
        preview.src = e.target.result
        preview.style.display = "block"
      }
      mainReader.readAsDataURL(images[0])
    }

    images.forEach((image, index) => {
      const reader = new FileReader()
      reader.onload = e => {
        const thumb = document.createElement("img")
        thumb.src = e.target.result
        thumb.style.width = "60px"
        thumb.style.height = "60px"
        thumb.style.objectFit = "cover"
        thumb.style.border = "1px solid #ccc"
        thumb.setAttribute("draggable", "true")
        thumb.dataset.index = index

        thumb.addEventListener("dragstart", e => {
          e.dataTransfer.setData("text/plain", index)
        })

        thumb.addEventListener("dragover", e => {
          e.preventDefault()
        })

        thumb.addEventListener("drop", e => {
          e.preventDefault()
          const fromIndex = e.dataTransfer.getData("text/plain")
          const toIndex = e.target.dataset.index

          const movedItem = images.splice(fromIndex, 1)[0]
          images.splice(toIndex, 0, movedItem)

          renderThumbnails()
        })

        thumbnails.appendChild(thumb)
      }
      reader.readAsDataURL(image)
    })
  }
}

function crearPropiedad() {
  menuCrear()
  }

/* ---------------- Más ----------------- */

gridTopLeft.innerHTML = `<img src="logo.png" style="margin-left:64px;">`

botonIngresarAdmin.onclick = () => {
    window.location.href = "index.HTMl"
}

document.addEventListener("DOMContentLoaded",function(){
    let passwordAdmin = "1234"

    let divCenterCenterHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <label for="passwordAdminInput">Ingrese la contraseña para usuario admin</label>
        <input placeholder="Ingrese la contraseña secreta" id="passwordAdminInput">
        <label id="labelIncorrecto" style="margintop=30px"></label>
    </div>
    `
    divCenterCenter.innerHTML = divCenterCenterHTML

    let passwordAdminInput = document.getElementById("passwordAdminInput")

    passwordAdminInput.addEventListener("keydown", function(evento){
        if (evento.key === "Enter"){
            let passwordAdminCheck = passwordAdminInput.value
            if (passwordAdminCheck === passwordAdmin){
                divCenterCenterHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                <label>Bienvenido</label>
                <label>¿Qué desea registrar?</label>
                <button class="adminButton" id="casaBoton">Casa</button>
                <button class="adminButton" id="depaBoton">Departamento</button>
                <button class="adminButton" id="duplexBoton">Duplex</button>
                <button class="adminButton" id="terrenoBoton">Terreno</button>
                </div>
                `
                divCenterCenter.innerHTML = divCenterCenterHTML

                let casaBoton = document.getElementById("casaBoton")
                casaBoton.onclick = () => {
                    crearPropiedad("casa")
                }
            } else{
                let labelIncorrecto = document.getElementById("labelIncorrecto")
                labelIncorrecto.textContent="Contraseña Incorrecta"
                passwordAdminInput.value=""
            }
        }
    })
})