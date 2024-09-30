const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");
const { verifyToken } = require("../middlewares/authToken");
router.use(verifyToken)

router
.route("/product")
.post(verifyToken,controller.createProduct)
.get(verifyToken,controller.getProduct)

router.get("/getproduct", controller.getOneProduct)

module.exports = router;