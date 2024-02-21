const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send('Hi Sir')
})

app.listen(8081,()=>{
  console.log('Listening at port: 8081')
})