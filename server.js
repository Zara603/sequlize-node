
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');



const Sequelize = require('sequelize');
const db = new Sequelize('zara-test', 'postgres', 'astro', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

db.authenticate().then(() => console.log('database connected'));

const app = express();

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on ${port}`));