const router = require("express").Router();
const {
  getShoe,
  newShoe,
  editShoe,
  addColorway,
  removeColorway,
} = require("../controllers/shoe-controller");

router.get("/shoes", getShoe);
router.post("/shoes", newShoe);
router.put("/shoes", editShoe);

router.put("/shoes/colorWay", addColorway);
router.delete("/shoes/colorWay", removeColorway);

module.exports = router;
