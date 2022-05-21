const Router = require('express').Router;
const userRoute = Router();
const UserController = require('../controllers/user-controller');

userRoute.get('/', UserController.getUser);
userRoute.get('/:id', UserController.getUserByID);

module.exports = userRoute;