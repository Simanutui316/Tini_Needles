// Require modules
const express = require('express');
const path = require('path');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)


// Mount routes
app.get('/home', function (req, res) {
    res.render('home');
});
app.get('/signup', function (req, res) {
    res.render('signup');
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});