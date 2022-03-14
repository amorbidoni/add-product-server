const express = require('express');
const cors = require('cors');
const { dbConection } = require('./database/config');
require('dotenv').config();

//  crear el servidor de express
const app = express();

//base de datos

dbConection();

// directorio publico
app.use(express.static('public'));

// cors
app.use(cors());

// lectura y parseo del body
app.use(express.json());
// rutas
app.use('/', require('./routes/products'));

//
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
