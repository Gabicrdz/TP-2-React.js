const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const usuariosValidos = ['gabriel', 'sergio', 'juanq', 'emilio', 'rodrigo'];

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  if (usuariosValidos.includes(nombre)) {
    res.json({ mensaje: `¡Hola, ${nombre.charAt(0).toUpperCase() + nombre.slice(1)}!` });
  } else {
    res.json({ mensaje: 'Usuario no válido' });
  }
});
    
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
