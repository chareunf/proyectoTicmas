const imagenes = document.querySelectorAll(".imgProyectos")
const imagenesLight = document.querySelector(".agregarImagen")
const contenedorLight = document.querySelector(".imagenLight")
const hamburguer1 = document.querySelector(".hamburguer")

/*Captura de eventos click en las imagenes*/
imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        aparecerImagen(imagen.getAttribute("src"))

    })
})
/*Restablece la navegacion de la pagina sacando las imagenes seleccionadas con la funcion aprecerImagen */
contenedorLight.addEventListener("click", (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImage")
        hamburguer1.style.opacity = "1" 
    }
})

/*Funcion para hacer aparecer las imagenes de proyectos*/ 
const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
    hamburguer1.style.opacity = "0"       
}
