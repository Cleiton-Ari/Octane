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

/*
const reservationSchema = new Schema(
  {
    photo: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    marque: String,
    description: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);
*/

