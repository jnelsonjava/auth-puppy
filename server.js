'use strict';

const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Routes
app.get('/', renderHome);

function renderHome(req, res) {
  res.render('pages/index');
}

// Server start
app.listen(PORT, () => console.log(`Success! Active on port --${PORT}--`));

