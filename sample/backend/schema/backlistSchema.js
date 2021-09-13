const mongoose = require('mongoose')

const blacklistSchema = mongoose.Schema({
    ipAddress: String
})

module.exports = mongoose.model('blackedlist', blacklistSchema)
