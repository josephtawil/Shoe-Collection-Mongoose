const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// creating a subschema that we are using to structure the likes array in the shoeschema. Its a way that we can create an object inside the likes array. Its another way. We could have just put it into the shoeSchema
const subSchema = new Schema(
  {
    likerId: 
    {
      type: Schema.ObjectId,
    }
  },
  {_id: false}
  );

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

  likes: [subSchema],

  authorId: {
    type: Schema.ObjectId,
    required: "Must pass user id",
    ref: "User",
   },
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
