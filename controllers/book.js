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
const getAllBook = (req, res, next) => {
    res.json({message: "GET all book"});
};
//POST '/tea'
const newBook = (req, res, next) => {
    // dummy function for now
    res.json({message: "POST new book"}); 
};


//DELETE '/tea'
const deleteAllBook = (req, res, next) => {
    res.json({message: "DELETE all book"});
};

//GET '/tea/:name'
const getOneBook = (req, res, next) => {
    res.json({message: "GET one book"})
};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 book comment"})
};

//DELETE '/tea/:name'
const deleteOneBook = (req, res, next) => {
    res.json({message: "DELETE 1 book"})
};


module.exports = {
    getAllBook,
    newBook,
    deleteAllBook,
    getOneBook,
    newComment,
    deleteOneBook
};