const router = require("express").Router();
const jetski = require("../models/Jetski.model");
const User = require("../models/User.model");
const Reservation = require("../models/Reservation.model");




// reservation jour et heure
router.get("/reservation", (req, res, next) => {
 Reservation.find({})
    .then(reservationFromDb =>{
        res.status(200).json( {reservationList : reservationFromDb});
        return;
    })
    .catch(error => {
        res.status(400).json({errorMessage: error.message});
        return;
    })
})



// reserver une location de jetski
router.post("/reservation", (req, res, next) => {
    const { userId, jetskiId, fromDate, toDate}  = req.body;
    if (!userId || !jetskiId || !fromDate || !toDate){
        res.status(400).json({Message: "All fields are required"});
        return;
    }
    
    Reservation.create({
        userId,
        jetskiId,
        fromDate,
        toDate
    })
    .then(createdReservationFromDb => {   //reservation créer
        console.log(createdReservationFromDb);
        res.status(200).json({Message: createdReservationFromDb});
        return;
    })
    .catch(error => {
        res.status(400).json({errormessage: error.message});
        return;
    })
})




module.exports = router;