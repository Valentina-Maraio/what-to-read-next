//tea.js

/*newTea function for post tea route
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"}); // dummy function for now
};

//GET '/tea'
const getAllTea = (req, res, next) => {
    res.json({message: "GET all tea"});
};

//POST '/tea'
const newTea = (req, res, next) => {
    res.json({message: "POST new tea"});
};

//DELETE '/tea'
const deleteAllTea = (req, res, next) => {
    res.json({message: "DELETE all tea"});
};

//GET '/tea/:name'
const getOneTea = (req, res, next) => {
    res.json({message: "GET 1 tea"});
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 tea"});
};

//export controller functions
module.exports = {
    getAllTea, 
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea
};

*/

//newBook function for post book route
//GET '/tea'
const getAllBook = (req, res) => {
  Book.find({}, (err, data)=>{
      if (err){
          return res.json({Error: err});
      }
      return res.json(data);
  })
};
//POST '/tea'
const newBook = (req, res) => {
  //check if the book title already exists in db
  Book.findOne({ title: req.params.title }, (err, data) => {
    //if book not in db, add it
    if (!data) {
      //create a new book object using the Book model and req.body
      const newBook = new Book({
        title: req.params.title,
        author: req.body.author,
        //placeholder for now
        image: req.body.image,
        description: req.body.description,
        pages: req.body.pages,
        language: req.body.language,
      });

      //save this object to database
      newBook.save((err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
      });
      //if there's an error or the book is in db, return a message
    } else {
      if (err)
        return res.json(`Something went wrong, please try again. ${err}`);
      return res.json({ message: "Book aready exists" });
    }
  });
};

//DELETE '/tea'
const deleteAllBook = (req, res) => {
  Book.deleteMany({}, err => {
    if(err){
      return res.json({message: "Complete delete failed"});
    }
    return res.json({message: "complete delete successful"})
  })
};

//GET '/tea/:name'
const getOneBook = (req, res, next) => {
  let title = req.params.title;

  //find the specific book with that title
  Book.findOne({title: title}, (err, data) => {
    if(err || !data) {
      return res.json({message: "Book doesn't exist."});
    } else 
    //return the book object if found
    return res.json(data)
  })
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
  res.json({ message: "POST 1 book comment" });
};

//DELETE '/tea/:name'
const deleteOneBook = (req, res, next) => {
  //get the title of the book to delete
  let title = req.params.title

  Book.deleteOne({title:title}, (err, data) => {
    //if there's nothing to delete return a message
    if(data.deletedCount === 0) return res.json({message: "Book doens't exists."});
    //else if there's an error, return the err message
    else if (err) return res.json(`Something went wrong, please try again. ${err}`);
    //else, return the success message
    else return res.json({message: "Book deleted."});
  });
};

const Book = require("../models/book");

module.exports = {
  getAllBook,
  newBook,
  deleteAllBook,
  getOneBook,
  newComment,
  deleteOneBook,
};
