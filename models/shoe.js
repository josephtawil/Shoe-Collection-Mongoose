const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  brand: {
    type: String,
    trim: true,
    required: "Must enter a shoe brand",
  },

  price: {
    type: String,
    trim: true,
    required: "Must enter a price",
  },

  colorWay: [String],
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
