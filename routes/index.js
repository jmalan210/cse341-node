const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.jenniferRoute);
routes.get('/jon', lesson1Controller.jonRoute);
routes.get('/garrett', lesson1Controller.garrettRoute);

module.exports = routes;
