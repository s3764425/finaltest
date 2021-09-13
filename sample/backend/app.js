var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3001

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var logsRouter = require('./routes/mylog');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/log', logsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app;
