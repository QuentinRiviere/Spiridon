const express = require('express');
const sample = express.Router();

sample
    // define the home page route
    .get('/sample/all', function (req, res) {
        res.send('GET method for sample api.')
    })
    .get('/sample/:id', function (req, res) {
        res.send('GET method for sample api.')
    })
    .post('/sample/create', function (req, res) {
        res.send('POST method for sample api.')
    })
    .put('/sample/update/:id', function (req, res) {
        res.send('PUT method for sample api.')
    })
    .delete('/sample/delete/:id', function (req, res) {
        res.send('DELETE method for sample api.')
    });
module.exports = sample;