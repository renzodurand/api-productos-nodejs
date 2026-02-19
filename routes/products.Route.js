const productsController = require('../controllers/productsController');
const express = require('express');
const router = express.Router();

function validateProduct(req, res, next){
    const nombre = req.body.nombre;
    const precio = req.body.precio;

    if(!nombre || !precio){
        res.status(400).json({message: "ERROR: Los datos del producto son incorrectos o faltan campos obligatorios."})
        return;
    } else {
        next();
    }
}

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProduct);
router.post('/products', validateProduct, productsController.postProduct);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);

module.exports = router;