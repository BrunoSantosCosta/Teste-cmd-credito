const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Deu bom');
})

app.listen(3001,() => console.log('Server started at http://localhost:3001'))