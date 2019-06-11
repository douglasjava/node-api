const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://192.168.99.100:17017/nodeapi", 
    { useNewUrlParser: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product'); 

// Primeira rota
app.get('/', (req, res) => {
   Product.create({
       title: "React Native",
       description: "Build native apps with React",
       url: "http://github.com/facebook/react-native"
   }); 

    return res.send('Hello2222')
});

app.listen(3001);