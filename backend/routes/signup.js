// Importing modules 
const express = require('express'); 
const router = express.Router(); 

// Importing User Schema 
const User = require('../schemas/user'); 

// User signup api 
// eslint-disable-next-line no-unused-vars
router.post('/', (req, res, next) => { 


    // Creating empty user object 
        let newUser = new User(); 
    
        // Initialize newUser object with request data 
    
        newUser.email = req.body.email,
    
    
        newUser.password=req.body.password
    
                        // Call setPassword function to hash password 
                        newUser.setPassword(req.body.password); 
    
        // Save newUser object to database 
        newUser.save((err) => { 
            if (err) { 
                return res.status(400).send({ 
                    message : "Failed to add user."
                }); 
            } 
            else { 
                return res.status(201).send({ 
                    message : "User added successfully."
                }); 
            } 
        }); 
    }); 
    // Export module to allow it to be imported in other files 
    module.exports = router; 