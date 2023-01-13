//tea.js

const express = require('express');
//1.
const router = express.Router();
const bookController = require('../controllers/book');

router.get('/book', bookController.getAllBook);
router.post('/book', bookController.newBook);
router.delete('/book', bookController.deleteAllBook);

router.get('/book/:name', bookController.getOneBook);
router.post('/book/:name', bookController.newComment);
router.delete('/book/:name', bookController.deleteOneBook);
//2.
//const teaController = require('../controllers/tea);
//3.
//router.post('/tea', teaController.newTea);
router.post('/book', bookController.newBook);
//4.
module.exports = router;
