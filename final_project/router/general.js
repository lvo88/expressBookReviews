const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      if (!isValid(username)) {
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registred. Now you can login"});
      } else {
        return res.status(404).json({message: "User already exists!"});
      }
    }
    return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify(books,null,4));
    
    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("Promise resolved")
        },6000)})
    
    //Console log before calling the promise
    console.log("Before calling promise");
    
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        })
    
    //Console log after calling the promise
    console.log("After calling promise");
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("Promise resolved")
        },6000)})
    
    //Console log before calling the promise
    console.log("Before calling promise");
    
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        })
    
    //Console log after calling the promise
    console.log("After calling promise");
    let book = books[isbn];
    res.send(book);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
    const author = req.params.author;
    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("Promise resolved")
        },6000)})
    
    //Console log before calling the promise
    console.log("Before calling promise");
    
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        })
    
    //Console log after calling the promise
    console.log("After calling promise");
    for (let i = 1; i <= 10; i++) {
        let book = books[i];
        if (book["author"] == author) {
            res.send(book);
            break;
        } 
    }
    res.send("There is no such author!");
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    const title = req.params.title;
    //Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
    let myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve("Promise resolved")
        },6000)})
    
    //Console log before calling the promise
    console.log("Before calling promise");
    
    //Call the promise and wait for it to be resolved and then print a message.
    myPromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
        })
    
    //Console log after calling the promise
    console.log("After calling promise");
    for (let i = 1; i <= 10; i++) {
        let book = books[i];
        if (book["title"] == title) {
            res.send(book);
            break;
        } 
    }
    res.send("There is no such author!");
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
    const isbn = req.params.isbn;
    let book = books[isbn];
    res.send(book["reviews"]);
});



module.exports.general = public_users;
