const textoContador = document.getElementById("contador");

// Obtener el botón
const boton = document.getElementById("btn-like");

// Obtener el cuerpo de la tabla
const tablaRegistros = document.getElementById("tabla-registros");



// Variable que almacena los clics
let likes = 0;


boton.addEventListener("click", function() {

    likes++;

    
    textoContador.textContent = likes;



    const ahora = new Date();

    // Formatear la hora
    const hora = ahora.toLocaleTimeString("es-CO", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });




    const nuevaFila = document.createElement("tr");

    
    const celdaNumero = document.createElement("td");

   
    const celdaHora = document.createElement("td");


 

    celdaNumero.textContent = likes;
    celdaHora.textContent = hora;




    nuevaFila.appendChild(celdaNumero);
    nuevaFila.appendChild(celdaHora);



    tablaRegistros.prepend(nuevaFila);

});
