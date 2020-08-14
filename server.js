require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const userController = require('./controllers/userController');

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express JS started on port:3000');
});

app.use('/user', userController);