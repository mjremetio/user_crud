require('./models/db');

const express = require('express');

const userControler = require('./controllers/userController');

var app = express();

app.listen(3000, () => {
    console.log('Express JS started on port:3000');
});

app.use('/user', userController);