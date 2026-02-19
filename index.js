const productsRoute = require('./routes/products.Route');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', productsRoute);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({message: "Error interno del servidor!"})
});

app.listen(3000, () => {
    console.log('El server ya está funcionando en el puerto 3000');
});