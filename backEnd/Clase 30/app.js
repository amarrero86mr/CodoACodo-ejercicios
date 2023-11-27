import express from 'express'
const app = express()
const port = 3000
import usuarioRoutes from './src/routes/usuariosRoutes.js'
import adminRoutes from './src/routes/adminRoutes.js'

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//motor views
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/', usuarioRoutes)
app.use('/', adminRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});