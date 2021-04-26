
import './App.css';
import Header from "./components/Header"
import FormularioTarea from "./components/FormularioTarea"
import ListaTareas from "./components/ListaTareas"
import { useState } from 'react';

const App = () => {
  const [tareas, cambiarTareas] = useState([]);

  return (
    <div className="contenedor">
      <Header/> 
      <FormularioTarea tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;
