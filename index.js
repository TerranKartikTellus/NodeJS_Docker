const express = require('express');

const app = express();

let load = 0; 

app.get('/', (req, res) => {
  res.send(`Hi Sir, Load: ${load}`);
});

app.get('/load', (req, res) => {
  res.send(`Load: ${load}`);
});

app.get('/load/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Id: ${id}`);
});

app.listen(8081, () => {
  console.log('Listening at port: 8081:',load);
});
