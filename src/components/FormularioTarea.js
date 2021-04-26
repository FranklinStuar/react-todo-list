import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'; // ayuda a generar ids únicos para cada item

const FormularioTarea = ({tareas, cambiarTareas}) => {
    const [nuevaTarea, cambiarNuevaTarea] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        cambiarTareas([
            ...tareas, // llamo al contenido de las tareas anteriores
            {         
                id:uuidv4(), // metodo para obtener un id único
                texto:nuevaTarea,
                completado: false
            }
        ])
        cambiarNuevaTarea('')
    }
    const handleTarea = (e) =>{
        cambiarNuevaTarea(e.target.value)
    }
    return ( 
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                onChange={handleTarea}
                value={nuevaTarea}
            />
            <button 
                type="submit"
                className="formulario-tareas__btn"
            >
                <FontAwesomeIcon 
                    icon={faPlusSquare}
                    className="formulario-tareas__icono-btn"
                />
            </button>
        </form>
    );
}
 
export default FormularioTarea;