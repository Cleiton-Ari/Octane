const mongoose = require("mongoose");
const User = require("./User.model.js");
const Jetski = require("./Jetski.model.js");
//const { string } = require("prop-types");


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const reservationSchema = new mongoose.Schema( 
    {
        userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
        jetskiId:{type: mongoose.Schema.Types.ObjectId, ref: 'Jetski', default: null},
        fromDate: { type: Date },
        toDate : {type: Date}
   
    },
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;


