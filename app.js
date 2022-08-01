const funciones = require("./funcionesDeTareas"); 

const process = require("process"); 

const comando = process.argv[2];



switch (comando) {

    case "listar":

    let tareas = funciones.leerJSON();
    
    if (tareas.length == 0) {
        console.log("lista de tareas vacia");
    } else {
        console.log("Lista de Tareas");

        tareas.forEach(tarea => { 
            console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`);
        })
    }
    break;



    case "crear":

    let titulo = process.argv[3];
    let estado = process.argv[4];
    
    if (titulo && estado) {
        funciones.agregarTarea(titulo, estado);
        
        console.log("se agrego una nueva tarea");
    } else {
        console.log("debes ingresar titulo y estado para crear una nueva tarea");
    }
    break;


    case "filtrar":

    let filtro = process.argv[3];
    
    let tareasFiltradas = funciones.filtrarPorEstado(filtro); 
    
    if (filtro && tareasFiltradas.length != 0) {
      
        console.log(`Lista de Tareas filtradas: ${filtro}`);
      

        tareasFiltradas.forEach(tarea => {

            console.log(`Titulo: ${tarea.titulo} // ${tarea.estado}`);
            
        })
    } else if (filtro && tareasFiltradas.length == 0) {

        console.log("no existen tareas con ese estado");

    } else {

        console.log("debes ingresar un estado");
    }

    case undefined :
        console.log("ATENCION debes insgresar un comando")
    
    break;
    
    default:
        console.log("NO entiendo que quieres hacer")
    break;
}