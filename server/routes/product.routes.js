const ProductController = require('../controllers/product.controller');

module.exports = function(app){

    app.post('/api/new', ProductController.createNewProduct);
    app.get('/api/authors', ProductController.getAllProducts);
    app.get('/api/:_id', ProductController.getOne);
    app.put('/api/edit/:_id/', ProductController.update);
    app.delete('/api/delete/:_id/', ProductController.delete);
}
