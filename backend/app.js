var patientRouter = require('./routes/patient')
var tableRouter = require('./routes/table')
var LoginRouter = require('./routes/login');
var SignupRouter = require('./routes/signup')
var express = require('express')
var app = express()
var cors = require('cors')

var cookieParser = require('cookie-parser')
var logger = require('morgan')
const port = 3307
const mongo = require('./connectToMongoDB')

mongo()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/patient', patientRouter)
app.use('/table', tableRouter)
app.use('/login', LoginRouter)
app.use('/signup', SignupRouter)

app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
})
module.exports = app;
