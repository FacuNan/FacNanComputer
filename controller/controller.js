import { informacion } from "../service/service.js";

const articulo = document.querySelector('.presentacion__info')


const agregarInformacion = (nombre, descripcion) => {
    const contenido = `<h1 class="animated-text" >${nombre}</h1>
<p>${descripcion}</p>`

    articulo.innerHTML = contenido;
}


informacion.listaInformacion().then(
    (data) => {
        data.forEach((info) => {
            agregarInformacion(info.nombre, info.descripcion);
        })
    }
)