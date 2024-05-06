// import express from 'express';
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(8080);

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/public', express.static('public'));