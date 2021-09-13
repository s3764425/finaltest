var express = require('express');
var logSchema = require('../schema/logSchema')
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    try{
        const mylog = new logSchema(req.body)
        mylog.save()
        next()
    }
    catch (e) {
        res.status(400).send({e: 'Failed'})
    }
});

module.exports = router;
