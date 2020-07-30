const router = require("express").Router();
const {
  getShoe,
  newShoe,
  editShoe,
  addColorway,
  removeColorway,
  addLike,
  deleteLike,
  addColorways
} = require("../controllers/shoe-controller");

router.get("/shoes", getShoe);
router.post("/shoes", newShoe);
router.put("/shoes", editShoe);

router.put("/shoes/colorWay", addColorway);
router.put("/shoes/colorWays", addColorways);
router.delete("/shoes/colorWay", removeColorway);

router.put("/shoes/like", addLike);
router.delete("/shoes/like", deleteLike);

module.exports = router;
