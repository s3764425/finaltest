// Importing modules 
const express = require('express'); 
const router = express.Router(); 

// Importing User Schema 
const User = require('../schemas/user'); 

// User login api 
router.post('/', (req, res) => { 

    // Find user with requested email 
    User.findOne({ email : req.body.email }, function(err, user) { 
        if (user === null) { 
            return res.status(400).send({ 
                message : "User not found."
            }); 
        } 
        else { 
            if (user.validPassword(req.body.password)) { 
                return res.status(201).send({ 
                    message : "User Logged In", 
                    token : "this is the only token"
                }) 
            } 
            else { 
                return res.status(400).send({ 
                    message : "Wrong Password"
                }); 
            } 
        } 
    }); 
}); 

module.exports = router