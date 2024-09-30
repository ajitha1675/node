const express = require("express");
const router = express.Router();
const controller = require("../controllers/account.controller");
const { verifyToken } = require("../middlewares/authToken");

router.use(verifyToken);

router.post("/account", controller.createAccount);
router.get("/find", controller.findForAllData);

module.exports = router; 