const router = require("express").Router();
const Jetski = require("../models/Jetski.model");
const Reservation = require('../models/Reservation.model')


router.get("/jetski", (req, res) => {
    
    Jetski.find({})
    .then( jetskis => {
        res.json({jetskis :jetskis })
    })
    .catch( error => {
        res.json({ errorMessage: error.message })
    })

});


router.get("/jetski/:id", (req, res) => {
    const jetskiId = req.params.id
    
    Jetski.findById(jetskiId)
    .then( jetski => {
        res.json({jetski})
    })
    .catch( error => {
        res.json({ errorMessage: error.message })
    })
    
});


router.post("/reservation", (req, res) => {
    const { date, jetskiId } = req.body
    const userId = req.session.user._id

    Reservation.create({userId, date, jetskiId})
    .then( createdReservation => {
        res.status(200).json({createdReservation})
    })
    .catch(error => {
        res.json({ errorMessage: error.message })
    })
})

module.exports = router;