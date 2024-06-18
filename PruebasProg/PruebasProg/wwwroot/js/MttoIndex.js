
import { $,$a } from "./utils.js";
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
    // Ejemplo de creación de variables para cada elemento
    const idLinea = fila.querySelector('.IdLinea').textContent;
    const idPlanta = fila.querySelector('.IdPlanta').textContent;
    const fP = fila.querySelector('.FechaPROG').textContent;

    const fechaRealiz = fila.querySelector('.FR').textContent;

    const fechaProg = new Date(fP);
    const fechaProg = new Date(fechaStr);


    const realizadoPor = fila.querySelector('.RalP').textContent;
    const revisadoPor = fila.querySelector('.RevP').textContent;
    const aprobadoPor = fila.querySelector('.aprvP').textContent;


    const nserie = fila.querySelector('.Nserie').textContent;
    const estatus = fila.querySelector('.Estatus').textContent;
    const estacion = fila.querySelector('.Estacion').textContent;

    const problemasEncontrados = fila.querySelector('.PE').textContent;
    const cambiosRealizados = fila.querySelector('.CR').textContent;

    const comentarios = fila.querySelector('.cm').textContent;

    // Puedes usar estas variables según tus necesidades específicas
    //console.log(idLinea, idPlanta, fechaProg, realizadoPor, revisadoPor, aprobadoPor, fechaRealiz, nserie, estatus, estacion, problemasEncontrados, cambiosRealizados, comentarios);



     
    const miLista = [
        idLinea,
        idPlanta,
        fechaProg,
        realizadoPor,
        revisadoPor,
        aprobadoPor,
        fechaRealiz,
        nserie,
        estatus,
        estacion,
        problemasEncontrados,
        cambiosRealizados,
        comentarios
    ];

    const miListaS = [
        "Linea",
        "Planta",
        "Fecha programada",
        "Fecha realizada",
        "Revisado por",
        "Aprovado por",
        "Realizado por",
        "Numero de serie",
        "Estatus",
        "Estacion",
        "Problemas encontrados",
        "Cambios realizados",
        "Comentarios"
    ];


 






    // Realiza la acción específica que deseas con los datos obtenidos
    //console.log(`Detalles de la fila: IdMTTO=${idMtto}, IdLinea=${idLinea}, IdPlanta=${idPlanta}, FechaPROG=${fechaProg}`);
    // Aquí puedes implementar tu lógica personalizada

    let tagNameClick = e.target.tagName.toLowerCase();
    let idClick = e.target.id;

    console.log(tagNameClick);
    console.log(idClick);
    // ? CARGAR IMAGEN EN MODAL PARA PREVIEW
    // ? MOSTRAR MODAL FORM PARA LIBERAR PATRULLAJE
    if (/*idClick == "idRowdata" &&*/ tagNameClick === "td") {
        /*id = e.target.getAttribute("name");*/
        const modal = new bootstrap.Modal($("#exampleModalLiberar"));
        modal.toggle();
    }


    const formElement = document.getElementById("formLiberarP");
    // Antes de mostrar el modal, elimina los elementos existentes
    while (formElement.firstChild) {
        formElement.removeChild(formElement.firstChild);
    }

    // Recorrer la lista y crear un div con cada valor
    miLista.forEach((valor, indice) => {
        // Crear un nuevo 
        
        const newDiv = document.createElement("div");
        newDiv.className = "mb-2";

        // Crear una etiqueta para el campo de entrada
        const label = document.createElement("label");
        label.setAttribute("for", miListaS[indice]);
        label.textContent = miListaS[indice];

        // Crear el campo de entrada
        const input = document.createElement("input");
        input.type = "text";
        input.id = valor;
        input.className = "form-control form-control-sm";
        input.name = valor;
        input.value = valor;

        // Agregar la etiqueta y el campo de entrada al div
        newDiv.appendChild(label);
        newDiv.appendChild(input);

        // Agregar el nuevo div al formulario
        formElement.appendChild(newDiv);
    });


    
    //const formElement = document.getElementById("formLiberarP");

    //// Recorrer la lista y crear un div con cada valor
    //miLista.forEach(valor => {
    //    // Crear un nuevo div
    //    const newDiv = document.createElement("div");
    //    newDiv.className = "mb-2";

    //    // Crear una etiqueta para el campo de entrada
    //    const label = document.createElement("label");
    //    label.setAttribute("for", "personaLibera");
    //    label.textContent = valor;

    //    // Crear el campo de entrada
    //    const input = document.createElement("input");
    //    input.type = "text";
    //    input.id = "personaLibera";
    //    input.className = "form-control form-control-sm";
    //    input.name = "persona_libera";
    //    input.value = valor;

    //    // Agregar la etiqueta y el campo de entrada al div
    //    newDiv.appendChild(label);
    //    newDiv.appendChild(input);

    //    // Agregar el nuevo div al formulario
    //    formElement.appendChild(newDiv);
    //});

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


