let products = []
let contadorId= 1;

function getAllProducts(){
    return products;
}

function getProductById(id){
    return products.find(p => p.id == id)
}

function addNewProduct(newProduct){
    newProduct.id = contadorId;
    products.push(newProduct);
    contadorId++;
    return newProduct;
}

function updateProduct(id, updateData){
    const product = products.find(p => p.id == id);

    if(product){
        product.nombre = updateData.nombre || product.nombre;
        product.precio = updateData.precio || product.precio;
        return product;
    } else {
        return null;
    }
    
}

function deleteProduct(id){
    const productToDelete = products.find(p => p.id === id);
    
    if(productToDelete){
        products = products.filter(p => p.id !== id)
        return productToDelete;
    }

    return null;
}
module.exports = {
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct
}