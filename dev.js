
//Traeremos a Express y crear una aplicación sencilla con express
const express = require('express');
const morgan = require('morgan');

const app = express();

// Configurar el logger
app.use(morgan('dev'));

//Definir nuestras rutas
app.get('/home', function(req, res){
    res.send('Bienvenido al mejor sitio de películas en la región')
})

app.get('/api/movie', function(req, res){
    res.send('EL CATÁLOGO DE PELÍCULAS AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/cines', function(req, res){
    res.send('EL CATÁLOGO DE CINES AÚN ESTÁ EN CONSTRUCCIÓN.')
})

app.get('/api/movie/expoferia', function(req, res){
    res.send('GRAN ESTRENO DE LA NUEVA TEMPORADA DE BETTY LA FEA <br><img src="https://media.vogue.mx/photos/5dfb443c38e2b300084b20b7/master/pass/GettyImages-818664.jpg" width="500">');
})


//Inicializar el servidor
const port = 3000 //se puede cambiar el número del puerto si lo desean
app.listen(port, () =>{
    console.log("Servidor en ejecución en: " + `http://localhost:${port}`)
})