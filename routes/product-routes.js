const productRoute = require('express').Router();
const ProductController = require('../controllers/product-controller');

productRoute.get('/', ProductController.getProduct);
productRoute.get('/detail', ProductController.getProductDetail);

module.exports = productRoute;