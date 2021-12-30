const { Router } = require('express');
const router = Router();
 
//Raiz
router.get('/', (req, res) => {    
    res.send(
       `
       <span> v-1.0.2 </span>
       <p>Bienvenido a la API de Los Simpsons Argentina.</p>
       <p>Para consultar los servicios disponibles ingresa a: <a href="localhost:4000" >Swagger</a></p>
       
       `
    );
})

router.get('/api/allLinks', (req, res) => { 
    const fs = require('fs');

    let rawdata = fs.readFileSync('./routes/caps.json');
    let caps = JSON.parse(rawdata);

    res.json(caps);
})

module.exports = router;