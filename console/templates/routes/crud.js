const express = require('express');
const $router = express.Router();

$router
    // define the home page route
    .get('/$router/all', function (req, res) {
        res.send('GET method for $router api.')
    })
    .get('/$router/:id', function (req, res) {
        res.send('GET method for $router api.')
    })
    .post('/$router/create', function (req, res) {
        res.send('POST method for $router api.')
    })
    .put('/$router/update/:id', function (req, res) {
        res.send('PUT method for $router api.')
    })
    .delete('/$router/delete/:id', function (req, res) {
        res.send('DELETE method for $router api.')
    });
module.exports = $router;