const express = require('express')
const patientSchema = require('../schemas/patientSchema')
const router = express.Router()

router.post('/', function(req,res) {
    res.header("Access-Control-Allow-Origin", "*")
    if (req.body.ward !== undefined) {
        patientSchema.find({ward: req.body.ward}).exec(function(err, patients) {
            if (err) {
                return res.send({
                    err: err.message
                })}
            return res.send(patients)
        })
    }
    if (req.body.time !== undefined) {
        patientSchema.find({created_at: {
            $gte: new Date("2021-09-09").toISOString(),
            $lt: new Date('2021-09-10').toISOString()
        }}).exec(function(err, patients) {
            if (err) {
                return res.send({
                    err: err.message
                })}
            return res.send(patients)
        })
    }
} );

module.exports = router
