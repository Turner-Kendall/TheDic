// const { verifyToken } = require("../controllers/authController");
const { Router } = require("express");
const { index } = require("../controllers/infoController");

const router = Router();
router.post("/", index);

module.exports = router;