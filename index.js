// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
// Leemos al archivo manualmente sin ninguna funcion
//   const read = fs.createReadStream('./static/index.html');
//   read.pipe(res)
// })

// server.listen(3000)

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // Tenemos la funcion que nos permite leer el archivo
  res.sendFile('./static/index.html',
    // La ruta completa inicical hasta este proyecto
    { root: __dirname })
})

app.listen(3000)

console.log(`Server  on port ${3000}`)

