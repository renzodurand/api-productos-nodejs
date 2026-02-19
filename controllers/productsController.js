const productsService = require('../services/productsService');

function getProducts(req, res){
    const products = productsService.getAllProducts();
    res.json(products);
}

function getProduct(req, res){
    const id = parseInt(req.params.id);
    const product = productsService.getProductById(id);

    if(!product){
        return res.status(404).json({message: "No se encontró el producto con este ID."})
    }
    res.json({
        message: "Producto encontrado con éxito.",
        data: product
    });
}

function postProduct(req, res, next){
    try{
        const product = productsService.addNewProduct(req.body);
        res.status(201).json({message: "Se agregó el producto correctamente.", product});
    } catch(error){
        console.error("Fallo en el controlador.", error);
        next(error);
    }
}

function updateProduct(req, res){
    const id = parseInt(req.params.id);
    const updatedProduct = productsService.updateProduct(id, req.body);
    
    if(!updatedProduct){
        return res.status(404).json({message: 'Producto no encontrado!'})
    }

    res.json({
        message: "Producto editado con éxito",
        data: updatedProduct
    });
}

function deleteProduct(req, res){
    const id = parseInt(req.params.id);
    const deletedProduct = productsService.deleteProduct(id);

    if(!deletedProduct){
        return res.status(404).json({message: "No se encontró el producto para eliminar."})
    }
    res.json({
        message: "Producto eliminado con éxito.",
        data: deletedProduct
    });
}
module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}