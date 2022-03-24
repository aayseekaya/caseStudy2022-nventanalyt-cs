module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const users = require("../controllers/user.controller.js");
  const books = require("../controllers/book.controller.js");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/tutorials/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/tutorials/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/tutorials/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/tutorials/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/tutorials/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/tutorials/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/tutorials/", tutorials.deleteAll);

  // Create a new User
  router.post("/users/", users.create);

  // Retrieve all Users
  router.get("/users/", users.findAll);

  // Retrieve all published Users
  router.get("/users/published", users.findAllPublished);

  // Retrieve a single User with id
  router.get("/users/:id", users.findOne);

  // Update a User with id
  router.put("/users/:id", users.update);

  // Delete a User with id
  router.delete("/users/:id", users.delete);

  // Delete all Users
  router.delete("/users/", users.deleteAll);

 // Create a new User
 router.post("/users/:id/borrow/:book_id", users.addBook);


  // Create a new Book
  router.post("/books/", books.create);

  // Retrieve all Books
  router.get("/books/", books.findAll);

  // Retrieve all published Books
  router.get("/books/published", books.findAllPublished);

  // Retrieve a single Book with id
  router.get("/books/:id", books.findOne);

  // Update a Book with id
  router.put("/books/:id", books.update);

  // Delete a Book with id
  router.delete("/books/:id", books.delete);

  // Delete all Books
  router.delete("/books/", books.deleteAll);


  app.use("", router);
};
