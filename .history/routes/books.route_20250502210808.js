const { getAllbooks, createBooks, updateBookById, deleteBookById, getSingleBookById, getSingleBookByPk } = require("../controllers/books.contoller");


const router = require("express").Router()
router.route('/books').get(getAllbooks).post(createBooks)
router.route('/books/:id').get(getSingleBookByPk).patch(updateBookById).delete(deleteBookById)


module.exports = router; //multiple huda {router,....,...}