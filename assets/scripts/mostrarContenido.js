
var txtCodRastreo = document.querySelector('#codRastreo');


btnMostrar = document.querySelector('#btnMostrar');
//-----------------------------------------------------------------------------------------//
//Metodo Post
//-----------------------------------------------------------------------------------------//

btnMostrar.addEventListener('click', () =>{
        guardarPaquete();
});

async function guardarPaquete(){
    
    var codRastreo = document.getElementById('txtCodRastreo');

    console.log(codRastreo);

    const res = await fetch(URL, {
        method: 'POST',
        header: {
            'Content-Type' : 'application/json',
        },
        body : JSON.values({})

    });
}