const express = require('express');
const app = express();
const port = 3000;
const rutasCud = require("./src/routes/crud");

//motor EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/', rutasCud);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});