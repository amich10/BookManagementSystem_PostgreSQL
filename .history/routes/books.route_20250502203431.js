const { getAllbooks } = require("../controllers/books.contoller");


const router = require("express").Router
router.route('/books').get(getAllbooks)


module.exports = router; //multiple hud {router,....,...}