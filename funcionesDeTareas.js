
let fs = require("fs");


function leerJSON() { 
    return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
}


function escribirJSON(info) { 
    fs.writeFileSync("./tareas.json", JSON.stringify(info), "utf-8");
}


function agregarTarea(titulo, estado) {
    let tareasAnteriores = leerJSON(); 

    let nuevaTarea = { 
        titulo: titulo,

        estado: estado
    }

    tareasAnteriores.push(nuevaTarea);

    escribirJSON(tareasAnteriores); 
}

function filtrarPorEstado(estado) {

    let tareas = leerJSON(); 


    return tareas.filter(tarea => tarea.estado == estado);
}



module.exports = { leerJSON, escribirJSON, agregarTarea, filtrarPorEstado };

