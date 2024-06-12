
import { $ } from "./utils.js";
let id = null;
let personaLibera = null;



export const obtenerDatosMtto = async () => {
  //  $(".container-loading").style = "display:flex;";

    const response1 = await fetch("/Mtto/Index", {
        method: "POST",
        body: null,
    });

    const data1 = await response1.text();

    console.log(data1)
    
    $(".container-items").innerHTML = data1;
   // $(".container-loading").style = "display:none;";
};


//---------------------------------------------------


export const mostrarDetalles =  (e) => {
    const fila = e.currentTarget;
    const idLinea = fila.querySelector('.IdLinea').textContent;
    const idPlanta = fila.querySelector('.IdPlanta').textContent;
    const fechaProg = fila.querySelector('.FechaPROG').textContent;

    // Realiza la acción específica que deseas con los datos obtenidos
    console.log(`Detalles de la fila: IdLinea=${idLinea}, IdPlanta=${idPlanta}, FechaPROG=${fechaProg}`);
    // Aquí puedes implementar tu lógica personalizada
}



export const contenedorDatos = (e) => {
    //let tagNameClick = e.target.tagName.toLowerCase();
    //let idClick = e.target.id;


    console.log("aspiudhaspoidhsaoid");

    //// ? CARGAR IMAGEN EN MODAL PARA PREVIEW
    //if (tagNameClick === "img") {
    //    $("#imagenSeleccionada").src = e.target.src;
    //    // Mostrar el modal
    //    const modal = new bootstrap.Modal($("#exampleModal"));
    //    modal.toggle();
    //}

    //if (idClick == "btnInfoLiberarP" && tagNameClick === "button") {
    //    $("#imagenAfterLiberacion").src = e.target.getAttribute("name");

    //    var siguienteEl = e.target.nextElementSibling
    //    personaLibera = siguienteEl.textContent;


    //    $("#personaLibero").value = e.target.nextElementSibling.textContent;
    //    $("#fechaLiberacionIn").value = siguienteEl.nextElementSibling.textContent
    //    const modal = new bootstrap.Modal($("#exampleModalInfoLiberacion"));
    //    modal.toggle();
    //}

    //// ? MOSTRAR COMETARIO COMPLETO
    //if (tagNameClick === "p" && e.target.classList.contains("card-text-small")) {
    //    e.target.classList.toggle("show");
    //}

    //// ? MOSTRAR MODAL FORM PARA LIBERAR PATRULLAJE
    //if (idClick == "btnLiberarP" && tagNameClick === "button") {
    //    id = e.target.getAttribute("name");
    //    const modal = new bootstrap.Modal($("#exampleModalLiberar"));
    //    modal.toggle();
    //}
};


