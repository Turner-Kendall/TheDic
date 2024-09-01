const { Router } = require("express");
const { index, find, show, all, cat, edit, lookup } = require("../controllers/linkController");

const router = Router();

router.post("/", index);
router.post("/find", find);
router.get("/show", show);
router.get("/all", all);
router.post("/cat", cat);
router.post("/edit", edit);
router.post("/lookup", lookup);

module.exports = router;