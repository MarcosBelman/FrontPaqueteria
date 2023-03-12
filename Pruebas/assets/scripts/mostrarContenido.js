var txtCodRastreo = document.querySelector('#codRastreo');
var txtIdPaquete = document.querySelector('#idPaquete');
var txtNumPiezas = document.querySelector('#numPieza');
var txtAreaServicio = document.querySelector('#areaServicio');
var txtEstadoActual = document.querySelector('#estadoActual');

btnMostrar = document.querySelector('#btnMostrar');
//-----------------------------------------------------------------------------------------//
//Metodo Post
//-----------------------------------------------------------------------------------------//

btnMostrar.addEventListener('click', () =>{
        guardarPaquete();
});

async function guardarPaquete(){
    
    var codRastreo = parseInt(txtCodRastreo.value);
    var idPaquete = txtIdPaquete.value;
    var numPiezas = parseInt(txtNumPiezas.value);
    var areaServicio = txtAreaServicio.value;
    var estadoActual = txtEstadoActual.value;

    const res = await fetch(URL2, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            codRastreo: codRastreo,
            idPaquete: idPaquete,
            numPieza: numPiezas,
            areaServicio: areaServicio,
            estadoActual: estadoActual,
        }),
    }).catch(error => {error.log(error)});

    //const data = await res.json();
    //console.log({data});
}