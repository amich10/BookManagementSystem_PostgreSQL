const { getAllbooks, createBooks, updateBookById } = require("../controllers/books.contoller");


const router = require("express").Router
router.route('/books').get(getAllbooks).post(createBooks)
router.route('/books/:id').patch(updateBookById).delete()


module.exports = router; //multiple hud {router,....,...}