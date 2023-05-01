const listaInformacion = () => {
    return fetch("./json/db.json").then((respuesta) => respuesta.json())
}

export const informacion = {
    listaInformacion
}