const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
    dateTime: String,
    ipAddress: String,
    url: String
})

module.exports = mongoose.model('mylog', logSchema)
