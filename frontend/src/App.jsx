import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarValidacion = async () => {
    if (!nombre.trim()) {
      setMensaje('Por favor, ingresa un nombre.');
      return;
    }
  
    try {
      const nombreLimpio = nombre.trim().toLowerCase();
      const respuesta = await fetch(`http://localhost:3001/validar/${nombreLimpio}`);
      const datos = await respuesta.json();
  
      setMensaje(datos.mensaje);
    } catch (error) {
      setMensaje('Error al conectar con el servidor.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Validador de Usuarios</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresa tu nombre"
      />
      <button onClick={manejarValidacion} style={{ marginLeft: '10px' }}>
        Validar
      </button>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;