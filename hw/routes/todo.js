const express = require("express");
const router = express.Router();
const todo = require("../controllers/todo");

router.get("/", todo.findListAll);
router.get("/", todo.findDetail);
router.post("/", todo.create);
router.post("/", todo.delete);


module.exports = router;