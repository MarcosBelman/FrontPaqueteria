//-----------------------------------------------------------------------------------------//
//CREACION DE LAS CAJAS DE TEXTO

//-----------------------------------------------------------------------------------------//
//Metodo Get
//-----------------------------------------------------------------------------------------//
let lblError = document.querySelector('#error');
let btnEjemplo = document.querySelector('#ejemplo');

btnEjemplo.addEventListener('click', () =>{

    mostrarEstados();

});

async function mostrarEstados(){
    const res = await fetch(URL);
    const data = await res.json();

    if(res.status !== 200){
        console.log('Detecta el error');
        lblError.innerHTML = "Hubo un error:" + res.status + data.message;     
        console.log('holaaaa'+res.status + ' ' + data.message);
    }else{

        let dataSetEstados = [];

        data.forEach(element => {
            dataSetEstados.push(Object.values(element));
            console.log(element);
        });

        console.log({dataSetEstados});

        let tablaEstados = $('#estados-table').DataTable({
            data: dataSetEstados,
            columns: [
                {title: "idEstado"},
                {title: "codRastreo"},
                {title: "idPaquete"},
                {title: "numPieza"},
                {title: "fechaHora"},
                {title: "areaServicio"},
                {title: "estadoActual"},
            ],

        });

    }

}