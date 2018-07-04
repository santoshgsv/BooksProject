var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var book = require('./book');

router.route('/books').post(function (req, res) {
    var b = new book();
    b.book_name = req.body.book_name;
    b.book_author = req.body.book_author;
    b.book_price = req.body.book_price;
    b.location = req.body.location;
    b.no_of_pages = req.body.no_of_pages;
    b.edition = req.body.edition;
    b.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Book Created !' })
    })
});

router.route('/books').get(function (req, res) {
    book.find(function (err, books) {
        if (err) {
            res.send(err);
        }
        res.send(books);
    });
});

router.route('/books/:book_id').get(function (req, res) {

    book.findById(req.params.book_id, function (err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
});

router.route('/books/:book_id').put(function (req, res) {

    book.findById(req.params.book_id, function (err, book) {
        if (err) {
            res.send(err);
        }
        book.book_name = req.body.book_name;
        book.book_author = req.body.book_author;
        book.book_price = req.body.book_price;
        book.location = req.body.location;
        book.no_of_pages = req.body.no_of_pages;
        book.edition = req.body.edition;
        book.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Book updated!' });
        });

    });
});

router.route('/books/:book_id').delete(function (req, res) {

    book.remove({ _id: req.param.book_id }, function (err, book) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Book deleted' });
    })

});

module.exports = router;