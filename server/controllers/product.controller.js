const { Author } = require('../models/product.model');

class ProductController {

    getAllProducts (req, res) {
        // how we structure our res.json will be how it looks in the front-end
        Author.find({})
            .then(products => res.json(products))
            .catch(err => res.json(err));
    }

    createNewProduct = (req, res) => {
        Author.create(req.body)
        .then(newlyCreatedProduct => {
            console.log('HERE');
            res.json({ newProduct: newlyCreatedProduct })} )
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

    getOne(req, res) {
        // getting back one restaurant at a time
        Author.findOne({_id: req.params._id})
            .then(product => res.json(product))
            .catch(err => {
                console.log('not found')
                res.json(err)}
                );
    }

    
    update(req, res) {
        Author.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then((product) => res.json(product))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        Author.deleteOne({_id: req.params._id})
            .then(() => res.json({msg: "ok"}))
            .catch(err => res.json(err));
    }
    
}

module.exports = new ProductController();