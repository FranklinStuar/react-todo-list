import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

const Tarea = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {
    const [editandoTarea, cambiarEditandoTarea] = useState(false);
	const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);

    const handleSubmit = (e) =>{
        e.preventDefault();
        editarTarea(tarea.id,nuevaTarea);
		cambiarEditandoTarea(false);
    }
    const onclickEdit = () => {
        if(editandoTarea===false)
            cambiarNuevaTarea(tarea.texto)
        cambiarEditandoTarea(!editandoTarea)
    }
    return (
        <li className="lista-tareas__tarea">
            <FontAwesomeIcon 
				icon={tarea.completado ? faCheckSquare : faSquare}
				className="lista-tareas__icono lista-tareas__icono-check"
                onClick={()=>toggleCompletada(tarea.id)}
			/>
            <div>
                { editandoTarea === false ?
                        tarea.texto
                    :
                    <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="formulario-editar-tarea__input"
                            value={nuevaTarea}
                            onChange={(e) => cambiarNuevaTarea(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="formulario-editar-tarea__btn"
                        >
                            Actualizar
                        </button>
                    </form>
                }
            </div>
            
			<div className="lista-tareas__contenedor-botones">
				<FontAwesomeIcon 
					icon={faEdit} 
					className="lista-tareas__icono lista-tareas__icono-accion"
                    onClick={onclickEdit}
				/>
				<FontAwesomeIcon 
					icon={faTimes} 
					className="lista-tareas__icono lista-tareas__icono-accion" 
                    onClick={() => { borrarTarea(tarea.id) }}
				/>
			</div>
        </li>
    )
}
 
export default Tarea;