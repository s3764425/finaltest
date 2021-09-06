const mongoose = require('mongoose')

const blacklistSchema = mongoose.Schema({
    IPaddress: String
})

module.exports = new mongoose('blackedlist', blacklistSchema)
