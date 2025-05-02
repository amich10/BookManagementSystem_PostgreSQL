import { getAllbooks, createBooks, updateBookById, deleteBookById } from "../controllers/books.contoller";


import express from "express";
const router = express.Router();
router.route('/books').get(getAllbooks).post(createBooks);
router.route('/books/:id').patch(updateBookById).delete(deleteBookById);


export default router; //multiple hud {router,....,...}