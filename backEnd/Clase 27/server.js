const express = require('express')
const app = express()
const port = 3000

//middleware
app.use(express.json());

// modelo de datos
const games = [{
    id:1,
    title:'Mario'
},
{
    id:2,
    title:'Zelda'
},
{
    id:3,
    title:'Donkey Kong'
}];

app.get('/', (req, res) => {
  res.send('Hello World! hello people!!')
})

app.get('/api/games', (req, res) =>{
    console.log(req.query);
    //res.send(req.query);
    res.send(games);
});

app.post('/api/games', (req,res) =>{
    const game = {
        id: games.length +1,
        title: req.body.title,
    };
    console.log(req.body);
    games.push(game);
    res.send(games);    
});

app.get('/:nombre/:apellido', (req, res) => {
    console.log(req.params);
    res.send(`${req.params.nombre} ${req.params.apellido}`);
});

app.get('/api/games/:id', (req, res) =>{
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send(`No hay juego con id: ${req.params.id}`)
    res.send(game);
});

app.put('/api/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');

    game.title = req.body.title;
    res.send(game);
});

app.delete('/api/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');

    const index = games.indexOf(game);
    games.splice(index, 1);

    res.send(game);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})