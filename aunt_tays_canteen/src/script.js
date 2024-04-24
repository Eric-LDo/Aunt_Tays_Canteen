conection();

async function conection(){  
    const requestOptions = {
        method: "GET",
        body: raw,
        redirect: "follow"
      };
      
      fetch("localhost:8001/endereco", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    // let json  
    // await fetch('http://localhost:8001/endereco', { mode: 'no-cors' })
    // .then(response => json = response.json())

    // console.log(json)

    

    // const express = require('express');
    // const app = express();
    // app.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header("Content-Type", "application/json");
    // next();
    // });

    // app.get('/endereco', (req, res) => {
    // res.json(endereco);
    // });

    // app.listen(8001, () => {
    // console.log('Servidor rodando na porta 8001');
    // });
}