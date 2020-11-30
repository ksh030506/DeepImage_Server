require('dotenv').config();
var express = require('express');
var app = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var dbconfig = require('../../config/dbconfig');
var dbOptions = dbconfig;

app.use(session({
    secret: process.env.sessiohn_secret_key,
    store: new MySQLStore(dbOptions),
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');
app.set('views', './views');

const registerpage = function(req, res){
    if(!req.session.userEmail){
        res.render('register');
    }
    else {
        res.redirect('/');
    }
};

module.exports = registerpage;