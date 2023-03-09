console.log('ejecutandose');
const URL = 'https://localhost:7110/paqueteria/estadosPaquete';

fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].areaServicio);
            //console.log({data});
        });