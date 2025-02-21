document.addEventListener("DOMContentLoaded", function () {
    const bookForm = document.getElementById("add-book-form");
    const bookList = document.getElementById("book-list").querySelector("tbody");
    const borrowedBooksTable = document.getElementById("borrowed-books-table").querySelector("tbody");

    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        bookList.innerHTML = books.map((book, index) => 
            `<tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td><button onclick="deleteBook(${index})">Delete</button></td>
            </tr>`).join("");
    }

    function loadBorrowedBooks() {
        const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        borrowedBooksTable.innerHTML = borrowedBooks.map(book => 
            `<tr>
                <td>${book.name}</td>
                <td>${book.grade}</td>
                <td>${book.section}</td>
                <td>${book.bookTitle}</td>
                <td>${book.author}</td>
                <td>${book.date}</td>
            </tr>`).join("");
    }

    bookForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const bookName = document.getElementById("book-name").value;
        const authorName = document.getElementById("author-name").value;

        let books = JSON.parse(localStorage.getItem("books")) || [];
        books.push({ title: bookName, author: authorName });
        localStorage.setItem("books", JSON.stringify(books));

        bookForm.reset();
        loadBooks();
    });

    window.deleteBook = function(index) {
        let books = JSON.parse(localStorage.getItem("books"));
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
        loadBooks();
    };

    loadBooks();
    loadBorrowedBooks();
});
