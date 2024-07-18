
import { $, $a } from "./utils.js";
let id = null;
let personaLibera = null;




function obtenerPrimerLunes(fechaString) {
    const fechaObjetivo = new Date(fechaString);
    const mesObjetivo = fechaObjetivo.getMonth();
    const añoObjetivo = fechaObjetivo.getFullYear();

    const primerDíaDelMes = new Date(añoObjetivo, mesObjetivo, 1);
    const díaDeLaSemanaDelPrimerDía = primerDíaDelMes.getDay();

    const primerLunes = 1 + ((8 - díaDeLaSemanaDelPrimerDía) % 7);
    return new Date(añoObjetivo, mesObjetivo, primerLunes);
}





export const obtenerDatosMtto = async () => {
    //  $(".container-loading").style = "display:flex;";

    //const response1 = await fetch("/Mtto/Index", {
    //    method: "POST",
    //    body: null,
    //});



    const response1 = await fetch("/Mtto/JIndex", {
        method: "POST",
        body: null,
    });

    /* const data1 = await response1.text();*/
    const MttoJson = await response1.json();
    console.log(MttoJson)

    /*$(".container-items").innerHTML = data1;*/
    // $(".container-loading").style = "display:none;";
    /*const years = [];*/
    //var yandm = {
    //    "y": "",
    //    "m": ""

    //};


    //foreach(const [clave, valor] in MttoJson) {
    //    console.log(clave + ": " + valor);
    //}


    MttoJson.forEach(function (obj) {
        const fechaObj = new Date(obj.fechaPROG);
        const year = fechaObj.getFullYear();
        const NumeroA = $a("#accordion-" + year);
        if (NumeroA.length < 1) {
            $('.container-itemsD').innerHTML += `
            <div id="accordion-${year}">
        <div class="card">
            <div class="card-header" id="heading-${year}">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-${year}" aria-expanded="false" aria-controls="collapse-${year}">
                       ${year}
                    </button>
                </h5>
            </div>

            <div id="collapse-${year}" class="collapse" aria-labelledby="heading-${year}" data-parent="#accordion-${year}">
                <div class="card-body CbM-${year}">
             `
            MttoJson.forEach(function (objPlanta) {
                const Planta = objPlanta.idPlanta;
                const NumeroPlanta = $a("#accordion-" + Planta);
                /*console.log(obj.idPlanta)*/


                if (NumeroPlanta.length < 1) {
                    $('.CbM-' + year).innerHTML += `
            <div id="accordion-${Planta}">
        <div class="card">
            <div class="card-header" id="heading-${Planta}">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-${Planta}" aria-expanded="false" aria-controls="collapse-${year}">
                       ${Planta}
                    </button>
                </h5>
            </div>

            <div id="collapse-${Planta}" class="collapse" aria-labelledby="heading-${Planta}" data-parent="#accordion-${Planta}">
                <div class="card-body CbM-${Planta}">
          
                `
                    MttoJson.forEach(function (objMes) {

                        const fechaObjMes = new Date(objMes.fechaPROG);
                        const year = fechaObjMes.getFullYear();
                        const month = fechaObjMes.getMonth() + 1; // Suma 1 porque los meses están indexados desde 0
                        const day = fechaObjMes.getDate() + 1 ;
                        const fechaString = `${Planta}-${year}-${month}`;
                        var nombreMes = obtenerNombreMes(month);
                        nombreMes = nombreMes.toUpperCase();
                        console.log(fechaString);
                        /*console.log = (mes);*/
                        /* const mes = objPlanta.idPlanta;*/
                        const NumeroMeses = $a("#accordion-" + fechaString);
                        /*console.log(obj.idPlanta)*/
                        if (objMes.idPlanta == objPlanta.idPlanta) {
                            if (NumeroMeses.length < 1) {
                                $('.CbM-' + Planta).innerHTML += `
            <div id="accordion-${fechaString}">
        <div class="card">
            <div class="card-header" id="heading-${fechaString}">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-${fechaString}" aria-expanded="false" aria-controls="collapse-${year}">
                       ${nombreMes}
                    </button>
                </h5>
            </div>

            <div id="collapse-${fechaString}" class="collapse" aria-labelledby="heading-${fechaString}" data-parent="#accordion-${fechaString}">
                <div class="card-body CbM-${fechaString}">
        
           `

                 MttoJson.forEach(function (objData) {
                     
                     const fechaObjdata = new Date(objData.fechaPROG);
                     const yearD = fechaObjdata.getFullYear();
                     const monthD = fechaObjdata.getMonth() + 1; // Suma 1 porque los meses están indexados desde 0
                     const dayD = fechaObjdata.getDate() + 1 ;
                     const fechaStringD = `${Planta}-${yearD}-${monthD}-${dayD}`;
                        console.log(fechaString);
                        /*console.log = (mes);*/
                        /* const mes = objPlanta.idPlanta;*/
                    /* const NumeroD = $a("#accordion-" + fechaStringD);*/
                     /*console.log(obj.idPlanta)*/

                     console.log(yearD + ' ES IGUAL QUE ' + year);
                     console.log(objData.idPlanta + ' ES IGUAL QUE ' + objPlanta.idPlanta);
                     console.log(monthD + ' ES IGUAL QUE ' + objPlanta.idPlanta);
                     if (yearD == year) {
                         if (objData.idPlanta == objPlanta.idPlanta) {

                             if (monthD == month) {
                                 $('.CbM-' + fechaString).innerHTML += `
                                  <table class="table">
                        <thead>

                                <tr>
                                    <th>Linea</th>
                                    <th>Planta</th>



                                    <th>fecha proggramada</th>



                                    <th>Serie</th>
                                    <th> Estatus </th>
                                    <th>Estacion</th>




                                </tr>

                        </thead>

                           <tbody>

                            <tr class="container-RowData" id="idRowdata">
                                        <td style="display:none" class="IdMTTO">${obj.idMTTO}</td>
                                        <td class="IdLinea">${obj.idLinea}</td>
                                        <td class="IdPlanta">${obj.idPlanta}</td>


                                        <td style="display:none" class="RalP" >${obj.realizadoPor}</td>
                                        <td style="display:none" class="RevP">${obj.revisadoPor}</td>
                                        <td style="display:none" class="aprvP">${obj.aprobadoPor}</td>

                                        <td class="FechaPROG">${obj.fechaPROG}</td>


                                        <td style ="display:none" class="FR" >${obj.fechaRealiz}</td>



                                        <td  class="Nserie">${obj.nserie}</td>
                                        <td  class="Estatus">${obj.estatus}</td>
                                        <td  class="Estacion">${obj.estacion}</td>


                                        <td style="display:none" class="PE">${obj.problemasEncontrados}</td>
                                        <td style="display:none" class="CR">${obj.cambiosRealizados}</td>



                                        <td style="display:none" class="cm">${obj.comentarios}</td>

                                    </tr>



                        </tbody>

                    </table>

        `
                             } //if MES

                         } //IF PLANTA
                     } //IF Año
                          });//MES FOREASHE

           `

                
            </div>
        </div>
    </div>
    </div>

        `
                            } //if MES 

                        }

                    });//MES FOREASHE
                                `

                
            </div>
        </div>
    </div>
    </div>

        `
                        } //if PLANTA



                    });//PLANTA FOREASHE

                    `
                
            </div>
        </div>
    </div>
    </div>

        `
                }//if Año

            });//Años foreash






    //oijdoijdf;odsjfo;isdj;ofiAQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
    //<div id="accordion-${fechaStringD}">
    //    <div class="card">
    //        <div class="card-header" id="heading-${fechaStringD}">
    //            <h5 class="mb-0">
    //                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-${fechaStringD}" aria-expanded="false" aria-controls="collapse-${year}">
    //                    ${fechaStringD}
    //                </button>
    //            </h5>
    //        </div>

    //        <div id="collapse-${fechaStringD}" class="collapse" aria-labelledby="heading-${fechaStringD}" data-parent="#accordion-${fechaStringD}">
    //            <div class="card-body CbM-${fechaStringD}">


    //            </div>
    //        </div>
    //    </div>
    //</div>





            //years.forEach(function (year) {
            //    //console.log(obj.fechaPROG);
            //    //const fechaObj = new Date(obj.fechaPROG);

            //    $('.container-itemsD').innerHTML += `
            //    <div id="accordion${year}">
            //<div class="card">
            //    <div class="card-header" id="heading${year}">
            //        <h5 class="mb-0">
            //            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${year}" aria-expanded="false" aria-controls="collapse${year}">
            //               ${year}
            //            </button>
            //        </h5>
            //    </div>

            //    <div id="collapse${year}" class="collapse" aria-labelledby="heading${year}" data-parent="#accordion${year}">
            //        <div class="card-body CbM${year}">
            //        `
            //    MttoJson.forEach(function (obj) {

            //        const fechaObj = new Date(obj.fechaPROG);
            //        const MesJson = fechaObj.getMonth() + 1;
            //        m.forEach(function (ms) {

            //            if (MesJson == ms) {
            //                $('.CbM' + year).innerHTML +=

            //                    `
            //             <div id="accordion${ms}">
            //<div class="card">
            //    <div class="card-header row" id="heading${ms}">
            //     <div class="col">
            //        <h5 class="mb-0">
            //            <button class="btn btn-link NMC${ms} collapsed" data-toggle="collapse" data-target="#collapse${ms}" aria-expanded="false" aria-controls="collapse${ms}">
            //               ${ms}
            //            </button>
            //        </h5>
            //        </div>
            //        <div class="col">
            //         <div class="mb-2">
            //                <input type="button" value="Ver documento" id="btnverPDF" class="btn btn-danger btn-sm vPDF">
            //                  <img src="/images/pdf.png" alt="Descripción de la imagen">
            //                </div>
            //        </div>
            //    </div>

            //    <div id="collapse${ms}" class="collapse" aria-labelledby="heading${ms}" data-parent="#accordion${ms}">
            //        <div class="card-body Cbpm${ms}">
            //        `


            //                MttoJson.forEach(function (obj) {


            //                    const fechaObj = new Date(obj.fechaPROG);
            //                    const mes = fechaObj.getMonth() + 1;
            //                    let obtenerMes = fechaObj.toLocaleString('es-ES', { month: 'long' });
            //                    if (mes == ms) {
            //                        $('.NMC' + mes).innerHTML = `
            //                ${obtenerMes}

            //                `
            //                        console.log('.Cbpm' + mes);
            //                        $('.Cbpm' + mes).innerHTML += `
                    //                       <table class="table">
                    //    <thead>

                    //            <tr>
                    //                <th>Linea</th>
                    //                <th>Planta</th>



                    //                <th>fecha proggramada</th>



                    //                <th>Serie</th>
                    //                <th> Estatus </th>
                    //                <th>Estacion</th>




                    //            </tr>

                    //    </thead>

                    //       <tbody>

                    //        <tr class="container-RowData" id="idRowdata">
                    //                    <td style="display:none" class="IdMTTO">${obj.idMTTO}</td>
                    //                    <td class="IdLinea">${obj.idLinea}</td>
                    //                    <td class="IdPlanta">${obj.idPlanta}</td>


                    //                    <td style="display:none" class="RalP" >${obj.realizadoPor}</td>
                    //                    <td style="display:none" class="RevP">${obj.revisadoPor}</td>
                    //                    <td style="display:none" class="aprvP">${obj.aprobadoPor}</td>

                    //                    <td class="FechaPROG">${obj.fechaPROG}</td>


                    //                    <td style ="display:none" class="FR" >${obj.fechaRealiz}</td>



                    //                    <td  class="Nserie">${obj.nserie}</td>
                    //                    <td  class="Estatus">${obj.estatus}</td>
                    //                    <td  class="Estacion">${obj.estacion}</td>


                    //                    <td style="display:none" class="PE">${obj.problemasEncontrados}</td>
                    //                    <td style="display:none" class="CR">${obj.cambiosRealizados}</td>



                    //                    <td style="display:none" class="cm">${obj.comentarios}</td>

                    //                </tr>



                    //    </tbody>

                    //</table>
            //                `
            //                    }
            //                });


            //                `
            //          </div>
            //    </div>
            //</div>
            //</div>
            //        `
            //            }
            //        });
            //    });  /*asondajosdjas*/

            //        `
            //        </div>
            //    </div>
            //</div>
            //</div>

            //    `
            //});



    function obtenerNombreMes(numeroMes) {
        const fecha = new Date();
        fecha.setMonth(numeroMes); // Establece el mes según el número proporcionado
        return fecha.toLocaleString('es-ES', { month: 'long' });
    }


            const filas = $a('.container-RowData');
            filas.forEach((fila) => {
                fila.addEventListener('click', mostrarDetalles);
            });



            const BPDF = $a("#btnverPDF");

            BPDF.forEach((BTP) => {


                BTP.addEventListener('click', (e) => {
                    let tagNameClick = e.target.tagName.toLowerCase();
                    let idClick = e.target.id;
                    //console.log('aoiuushdosiahdoiasd');
                    //console.log(tagNameClick);
                    //console.log(idClick);

                    if (idClick == "btnverPDF" && tagNameClick === "input") {

                        var embedElement = document.getElementById('pdfView');
                        // var nuevoSrc = host + rutaPdf.trim();

                        embedElement.setAttribute('src', '/archivosMttos/PROGRAMACION DE MANTENIMIENTOS MAYO.pdf');



                        // Cuando sea necesario, abrir el segundo modal desde el primero

                        const modal2 = new bootstrap.Modal(document.getElementById('exampleModalPDF'));
                        modal2.show();


                    }
                });
            });








        };

        //--------- MODAL AGREGAR PROGRAMACION------------------------------------------
        export const AddProgMTTOandPdf = async (e) => {

            let tagNameClick = e.target.tagName.toLowerCase();
            let idClick = e.target.id;
          

            e.preventDefault();
            var formData = new FormData(e.target);
            //console.log(formData.get('realizadoPor'));
            //console.log(formData.get('FechaPROG'));
            //console.log(formData.get('revisadoPor'));
            //console.log(formData.get('aprobadoPor'));
            //console.log(formData.get('SupIs'));
            //console.log(formData.get('GteIs'));
            //console.log(formData.get('semana'));


            const response = await fetch(`/Mtto/AddPrgandPDFMtto`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {


                Swal.fire({
                    // title: 'Exito!',
                    text: "INCREIBLE",
                    icon: "success",
                });


            }

        }



        export const mostrarModalAddProgandPDF = (e) => {


            
            let tagNameClick = e.target.tagName.toLowerCase();
            let idClick = e.target.id;

            //console.log(tagNameClick);


            if (idClick == "btnAddProgandPDF" && tagNameClick === "button" || idClick == "idimgAddProgandPDF" && tagNameClick === "img") {
                /*id = e.target.getAttribute("name");*/
                const modal = new bootstrap.Modal($("#ModalAddprogMtto"));
                modal.show();
            }



        }
        //---------------------------------------------------





        //------------- MODAL AGREGAR MTTO--------------------------------------
        export const mostrarModalAddMtto = (e) => {

            let tagNameClick = e.target.tagName.toLowerCase();
            let idClick = e.target.id;

            //console.log(tagNameClick);


            if (idClick == "idBtnAddMtto" && tagNameClick === "button" || idClick == "idimgAddMtto" && tagNameClick === "img") {
                /*id = e.target.getAttribute("name");*/
                const modal = new bootstrap.Modal($("#ModalADDmtto"));
                modal.show();
            }



        }





        export const AddMTTO = async (e) => {

            let tagNameClick = e.target.tagName.toLowerCase();
            let idClick = e.target.id;


            e.preventDefault();
            var formData = new FormData(e.target);
            console.log(formData.get('IdLinea'));
            console.log(formData.get('Nserie'));
            console.log(formData.get('comentarios'));
            //console.log(formData.get('aprobadoPor'));
            //console.log(formData.get('SupIs'));
            //console.log(formData.get('GteIs'));
            //console.log(formData.get('semana'));


            const response = await fetch(`/Mtto/AddMtto`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {


                Swal.fire({
                    title: 'Exito!',
                    text: "INCREIBLE",
                    icon: "success",
                });


            }

        }
        //---------------------------------------------------




        export const mostrarDetalles = (e) => {
            const fila = e.currentTarget;
            // Ejemplo de creación de variables para cada elemento
            const idLinea = fila.querySelector('.IdLinea').textContent;
            const idPlanta = fila.querySelector('.IdPlanta').textContent;
            const fechaProg = fila.querySelector('.FechaPROG').textContent;

            const fechaRealiz = fila.querySelector('.FR').textContent;

            //const fechaStr = new Date(fP);
            //const fechaProg = fechaStr;


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
                fechaRealiz,
                revisadoPor,
                aprobadoPor,
                realizadoPor,
                nserie,
                estatus,
                estacion,
                problemasEncontrados,
                cambiosRealizados,
                comentarios
            ];

            const miListaL = [
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

            const miListaN = [
                "idLinea",
                "idPlanta",
                "fechaProg",
                "fechaRealiz",
                "revisadoPor",
                "aprobadoPor",
                "realizadoPor",
                "nserie",
                "estatus",
                "estacion",
                "problemasEncontrados",
                "cambiosRealizados",
                "comentarios"
            ];








            const nombresVariables = Object.keys(miLista);
            console.log(nombresVariables);

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
                const modal = new bootstrap.Modal($("#modalMostrarDetallesandUpdt"));
                modal.show();
            }


            const formElement = document.getElementById("formMostrarDetallesAndUpdate");
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
                label.setAttribute("for", miListaL[indice]);
                label.textContent = miListaL[indice];

                // Crear el campo de entrada
                const input = document.createElement("input");
                if (indice == 2 || indice == 3) {
                    input.type = "date";
                } else {
                    input.type = "text";

                }

                input.id = miListaN[indice];
                input.className = "form-control form-control-sm";
                input.name = miListaN[indice];
                input.value = valor;


                // Agregar la etiqueta y el campo de entrada al div
                newDiv.appendChild(label);
                newDiv.appendChild(input);

                // Agregar el nuevo div al formulario
                formElement.appendChild(newDiv);
            });

            const newDiv = document.createElement("div");
            newDiv.className = "mb-2";

            // Crear una etiqueta para el campo de entrada
            const inputb = document.createElement("input");
            inputb.type = "submit";
            inputb.id = "btnGuardar";
            inputb.className = "btn btn-info btn-sm";
            /*newDiv.appendChild(label);*/
            newDiv.appendChild(inputb);






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


