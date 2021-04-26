import React from 'react';
import Tarea from "./Tarea"


const ListaTareas = ({tareas, cambiarTareas,mostrarCompletadas}) => {
  const editarTarea = (id,texto) =>{
    cambiarTareas(tareas.map((tarea) =>{
      // ejecutamos codigo por cada tarea
      if(tarea.id === id){
        //devuelve un objeto con todos los valores que ya tenia, pero se va a sobrescribir uno
        return {...tarea, texto: texto}
      }
      return tarea;
    }))
  }
  const borrarTarea = (id) =>{
    cambiarTareas(tareas.filter((tarea) =>{
      // ejecutamos codigo por cada tarea
      if(tarea.id !== id)
        return tarea;
      return; // devuelve vacio para que no lo tome en cuenta
    }))
  }
  const toggleCompletada = (id) =>{
    cambiarTareas(tareas.map((tarea) =>{
      // ejecutamos codigo por cada tarea
      if(tarea.id === id){
        //devuelve un objeto con todos los valores que ya tenia, pero se va a sobrescribir uno
        return {...tarea, completado: !tarea.completado}
      }
      return tarea;
    }))
  }
  return ( 
      <ul className="lista-tareas">
        { tareas.length > 0 ? tareas.map((tarea) => {
              if(mostrarCompletadas){
                return <Tarea 
                    key={tarea.id} 
                    tarea={tarea}  
                    editarTarea={editarTarea}  
                    borrarTarea={borrarTarea}  
                    toggleCompletada={toggleCompletada} 
                  />
              }
              else if(!tarea.completado){
                return <Tarea 
                    key={tarea.id} 
                    tarea={tarea}  
                    editarTarea={editarTarea}  
                    borrarTarea={borrarTarea}  
                    toggleCompletada={toggleCompletada} 
                  />
              }
              return
            })
          :<div className="lista-tareas__mensaje">~ No hay tareas agregadas ~</div>
        }
      </ul>
    );
}
 
export default ListaTareas;