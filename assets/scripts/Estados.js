

/* let btnConsultarEstados = document.querySelector('#btnMostrar');

btnConsultarEstados.addEventListener('click', () =>{
    console.log('Entra al boton');
        fetch(URL)
            .then(res => res.json())
            .then(data => {

            let dataSetEstados = [];

            data.forEach(element => {
                dataSetEstados.push(Object.values(element));
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

        });

        console.log('Termina fetch');

}) */


let btnEjemplo = document.querySelector('#ejemplo');

btnEjemplo.addEventListener('click', () =>{

    fetch(URL)
    .then(res => res.json())
    .then(data => {

    let dataSetEstados = [];

    data.forEach(element => {
        dataSetEstados.push(Object.values(element));
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

}); 

})