/* 
    Cada estructura de datos entrega datos diferentes
    referentes a un departamento de compras
*/
import { women } from "./data/women";
import { men } from './data/men';
import { baby } from './data/baby';
import { kids } from './data/kids';
import { departamentosList } from './data/departamentos';
/* 
    Es necesario instalar cada una de las depen-
    dencias mencionadas a continuación con NPM
    npm install --save-dev 'body-parser'
    npm install --save-dev 'lodash'
    npm install --save-dev 'cors'
    npm install --save-dev 'express'    
*/
declare const require;
var bodyParser = require('body-parser');
var _ = require('lodash');
var cors = require('cors');
var express = require('express');
var app = express();
/*
    Inicializamos cada variable con let a un in memory array que se modificará
    con express y angular 
*/
let productosWomen = women;
let productosMen = men;
let productosBaby = baby;
let productosKids = kids; 
let departamentos = departamentosList;
/* Habilitamos cors para poder usar en la aplicación */ 
app.use(cors());
app.options('*', cors());
app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.route('/kids')
    .get((req, res) => {
        var filtered = productosKids;
        res.status(200).json(filtered);
    })
    .post((req,res) =>{
         productosKids.push(req.body);
         res.status(200).send();
    });
app.route('/women')
    .get((req, res) => {
        var filtered = productosWomen
        res.status(200).json(filtered);
    })
    .post((req,res) =>{
        productosWomen.push(req.body);
        res.status(200).send();
    });
app.route('/men')
    .get((req, res) => {
        var filtered = productosMen;
        res.status(200).json(filtered);
    })
    .post((req,res) =>{
        productosMen.push(req.body);
         res.status(200).send();
    });
app.route('/baby')
    .get((req, res) => {
        var filtered = productosBaby;
        res.status(200).json(filtered);
    })
    .post((req,res) =>{
         productosBaby.push(req.body);
         res.status(200).send();
    });
app.route('/departamentos')
    .get((req, res) => {
        var filtered = departamentosList;
        res.status(200).json(filtered);
    });
/*
app.route('/products/:productId') 
    .delete((req, res) => {
        let productId = req.params.productId;
        console.log("deleting",productId);
        const index  =  _.find(products, product => product.id === productId);
        products.splice(index,1);
        res.status(200).send;
    })
    .put((req, res) => {
        let productId = req.params.productId;
        console.log("putting",productId);
        let producto  =  _.filter(products, product => product.id === productId);
        producto.id  = req.params.productId;
        producto.stock = req.body.stock;
        console.log(producto.stock);
        res.status(200).send();
    });*/
var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});