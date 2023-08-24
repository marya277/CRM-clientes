const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
        origin: "http://localhost:5173",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
  })
);
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'crud_app'
});

// Endpoint para crear un contacto
app.post('/contactos', (req, res) => {
  const {
    nombre,
    apellido,
    email,
    telefono,
    fecha_nacimiento,
    direccion,
    tipo_contacto,
    origen
  } = req.body;
console.log(req.body)
  const query = `
    INSERT INTO contactos (nombre, apellido, email, telefono, fecha_nacimiento, direccion, tipo_contacto, origen)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [nombre, apellido, email, telefono, fecha_nacimiento, direccion, tipo_contacto, origen],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al crear el contacto' });
      } else {
        res.json({ message: 'Contacto creado con éxito' });
      }
    }
  );
});
// Endpoint para editar un contacto
app.put('/contactos/:id', (req, res) => {
  const { id } = req.params;
  const {
    apellido,
    email,
    telefono,
    fecha_nacimiento,
    direccion,
    tipo_contacto,
    origen
  } = req.body;

   const query = `
    UPDATE contactos
    SET apellido = ?, email = ?, telefono = ?, fecha_nacimiento = ?, direccion = ?, tipo_contacto = ?, origen = ?
    WHERE id = ?
  `;
 
 /* const query = `
  UPDATE contactos
SET apellido = 'Melendez',
    email = 'luisa99@example.com',
    telefono = NULL,
    fecha_nacimiento = NULL,
    direccion = NULL,
    tipo_contacto = NULL,
    origen = NULL
WHERE id_contacto = 3;

  
`;*/
  
  db.query(
    query,
    [apellido, email, telefono, fecha_nacimiento, direccion, tipo_contacto, origen, id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al editar el contacto' });
      } else {
        res.json({ message: 'Contacto editado con éxito' });
      }
    }
  );
});

// Endpoint para borrar un contacto
app.delete('/contactos/:id', (req, res) => {
  const idContacto = req.params.id;

  const query = `
    DELETE FROM contactos
    WHERE id_contacto = ?;
  `;

  db.query(query, [idContacto], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al borrar el contacto' });
    } else {
      res.json({ message: 'Contacto borrado con éxito' });
    }
  });
});
// Endpoint para listar los contactos
app.get('/contactos', (req, res) => {
  const query = 'SELECT * FROM contactos'; 
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    } else {
      res.json(result);
      console.log(result)
    }
  });
});
//endpoint para filtrar por nombre
app.get('/contactos', (req, res) => {
  const nombre = req.query.nombre; 
  let query = 'SELECT * FROM contactos'; 

  if (nombre) {
    query = `SELECT * FROM contactos WHERE nombre LIKE '%${nombre}%'`; 
  }

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener contactos:', err);
      res.status(500).json({ error: 'Error al obtener contactos' });
    } else {
      res.json(result);
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
