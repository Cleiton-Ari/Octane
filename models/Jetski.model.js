const { Schema, model } = require("mongoose");
//const mongoose = require('mongoose');


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const jetskiSchema = new Schema(
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

const Jetski = model("Jetski", jetskiSchema);

module.exports = Jetski;