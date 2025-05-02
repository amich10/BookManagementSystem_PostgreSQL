const { getAllbooks, createBooks } = require("../controllers/books.contoller");


const router = require("express").Router
router.route('/books').get(getAllbooks).post(createBooks)
router.route('/books/:id').pa


module.exports = router; //multiple hud {router,....,...}