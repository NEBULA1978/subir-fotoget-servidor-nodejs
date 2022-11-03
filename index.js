
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // Introduce entre etiqueta text en el navegador
  res.send('Hola mundo')
})
// Enviamos un tipo de respuesta dependiendo de la url solicitada rooting
app.get('/about', (req, res) => {
  res.send('About')
})
// Si introducimos en el navegador http://localhost:3000/about nos devolverá el texto About
// Cuando el cliente busca ruta Sino existe la ruta nos devuelve mensage 404
// Sin el framework express nos hubiera devuelto un codigo 200
app.get('/weather', (req, res) => {
  res.send('The curret weather in Nice')
})

// CUando no existe las rutas anterioers que existen en el servidor
// Ejecuta esta funcion de error
app.use((req, res) => {
  // Sino pongo status(404) en la pagina el codigo de estado me devuleve un 200
  res.status(404).send('No se encontro la ruta de tu pagina')
})

app.listen(3000)

console.log(`Server  on port ${3000}`)

