const express = require("express");
const router = express.Router();

const sellerController = require("../controllers/sellerController");

router.post("/register",sellerController.registerSeller);

router.post("/login",sellerController.loginSeller);

module.exports = router;
