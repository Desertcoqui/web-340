/*
============================================
; Title:  books.js
; Author: Professor Krasso
; Date:   8 March 2022
; Description: Assignment 1 solution

Title: Assignment 1.2
Author: Professor Krasso
Date: May 2022
Modified By: Ferdinand "Papo" Detres Jr
Description: This week's project shows how to debug with node
https://developer.chrome.com/docs/devtools/javascript/  -->

;===========================================
*/

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookStore {
  books = [];

  constructor() {
    this.books = [
      new Book("The Hobbit", "J.R.R. Tolkien"),
      new Book("The Fellowship of the Ring", "J.R.R. Tolkien"),
      new Book("The Two Towers", "J.R.R. Tolkien"),
      new Book("The Return of the King", "J.R.R. Tolkien"),
      new Book("Dune", "Frank Herbert"),
    ];
  }

  showBooks() {
    console.log("\n  -- DISPLAYING AVAILABLE BOOKS --");
    for (let book of this.books) {
      let currentBook = book;
    }
  }
}

let bookStore = new BookStore();
bookStore.showBooks();
