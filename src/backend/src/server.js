require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const session = require('express-session');

app.use(session({
    secret: 'seu_segredo',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } 
}));


//DB Connection
const conn = require('./db/conn');

conn();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(3000, function() {
    console.log("Servidor online")
});

module.exports = app;
