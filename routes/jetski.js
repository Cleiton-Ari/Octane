const router = require("express").Router();
const Jetski = require("../models/Jetski.model");
const Reservation = require('../models/Reservation.model')


router.get("/jetski", (req, res, next) => {
    
    Jetski.find({}) // trouver les jetskis dans lpa DB
    .then( jetskisFromDb => {
        res.status(200).json({jetskiList : jetskisFromDb });
        return;
    })
    .catch( error => {
        res.status(400).json({ errorMessage: error.message })
    })

});

//create Jetski on the database 
router.post('/jetski', (req, res, next) => {
    const {photo, make, description} = req.body;
    if (!photo || !make || !description) {
        res.status(400).json({Message: "All fields are required"});
        return;
        }
    Jetski.create({
        photo,
        make,
        description
    })
        .then(createdJetski => {
            console.log(createdJetski);
            res.status(200).json({Message: `Jetski created: ${createdJetski}`});
            return;
        })
        .catch(error => {
            res.status(400).json({erroMessage: "error creating Jetski"});
            return;
        })

    });



module.exports = router;