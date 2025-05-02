const { getAllbooks } = require("../controllers/books.contoller");


const router = require("express").Router
router.route('/books').get(getAllbooks).post(cre)


module.exports = router; //multiple hud {router,....,...}