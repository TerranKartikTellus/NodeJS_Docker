const express = require('express');

// get
const home_endpoint = require('./Endpoint_CallBack/GET/home.js');
const load_endpoint = require('./Endpoint_CallBack/GET/load/index.js');
const load_id_endpoint = require('./Endpoint_CallBack/GET/load/id.js');

const app = express();

let load = 0; 

app.get('/', home_endpoint(load));

app.get('/load', load_endpoint(load));

app.get('/load/:id', load_id_endpoint);

app.listen(8081, () => {
  console.log('Listening at port: 8081:',load);
});
