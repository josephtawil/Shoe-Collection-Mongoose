const Shoe = require("../models/shoe");

module.exports = {
  // creates a new shoe
  newShoe: async (req, res) =>
    Shoe.create({
      brand: req.body.brand,
      price: req.body.price,
    })
      .then((result) => res.send(result))
      .catch((err) => res.send(err)),

  // if req.query is passed it will find the specific shoe
  // otherwise it will return all shoes
  getShoe: (req, res) => {
    !req.query.id
      ? Shoe.find({})
          .then((allShoes) => res.send(allShoes))
          .catch((err) => res.send(err))
      : Shoe.findById(req.query.id)
          .then((foundShoe) => res.send(foundShoe))
          .catch((err) => res.send(err));
  },

  editShoe: (req, res) =>
    Shoe.findByIdAndUpdate(req.query.id, req.body)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err)),

  addColorway: async (req, res) => {
    try {
      const shoe = await Shoe.findById(req.query.id);
      shoe.colorWay.push(req.query.colorWay);
      await shoe.save();
      res.send(shoe);
    } catch (err) {
      res.send(err);
    }
  },

  removeColorway: async (req, res) => {
    try {
      const shoe = await Shoe.findById(req.query.id);
      const indexToDelete = shoe.colorWay.indexOf(req.query.colorWay);

      shoe.colorWay.splice(indexToDelete, 1);
      shoe.save();

      res.send(shoe);
    } catch (err) {
      res.send(err);
    }
  },
};
