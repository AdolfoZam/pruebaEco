const express = require('express');
const db = require('./utils/database');
const app = express();

const PORT = 7500;

db.authenticate()
  .then(()=> console.log('data base authenticate'))
  .catch((error) => console.log(error))

app.get('/', async( req, res ) => {
    res.json({message: 'Welcome to server Adolfo'})
});

app.listen(PORT, ()=>{
    console.log(`Server listen by port ${PORT}`)
});
