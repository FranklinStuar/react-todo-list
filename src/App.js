
import './App.css';
import Header from "./components/Header"
import FormularioTarea from "./components/FormularioTarea"
import ListaTareas from "./components/ListaTareas"
import { useEffect, useState } from 'react';

const App = () => {
  /** Tareas */
  //Se ejecuta al iniciar la aplicacion, se ejecuta en cada actualizacion
  const tareasGuardadas = 
    localStorage.getItem('tareas') ? 
      JSON.parse(localStorage.getItem('tareas')) 
    : [];

  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  
  useEffect(()=>{
    localStorage.setItem('tareas',JSON.stringify(tareas))
  },[tareas]) // el codigo se actualiza solo cuando la informacion de las tareas cambia


  /** Mostrar opcion de mostrar u ocultar tareas */
  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas)

  useEffect(()=>{
    localStorage.setItem('mostrarCompletadas',mostrarCompletadas)
  },[mostrarCompletadas])

  /** Codigo para la aplicacion */
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      /> 
      <FormularioTarea 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}  
      />
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas={mostrarCompletadas} 
      />
    </div>
  );
}

export default App;
