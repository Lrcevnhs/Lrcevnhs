document.addEventListener("DOMContentLoaded", function () {
    const bookTitleSelect = document.getElementById("book-title");
    const addBookForm = document.getElementById("add-book-form");
    const borrowedBooksTable = document.getElementById("borrowed-books-table").querySelector("tbody");
    const countdownTimer = document.getElementById("countdown-timer");

    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        bookTitleSelect.innerHTML = books.map(book => `<option value="${book.title}">${book.title} - ${book.author}</option>`).join("");
    }

    function saveBorrowedBook(name, grade, section, bookTitle, bookAuthor) {
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        borrowedBooks.push({ name, grade, section, bookTitle, bookAuthor, date: new Date().toLocaleString("en-PH") });
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    }

    function displayBorrowedBooks() {
        borrowedBooksTable.innerHTML = "";
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];

        borrowedBooks.forEach((book, index) => {
            let row = borrowedBooksTable.insertRow();
            row.innerHTML = `
                <td>${book.name}</td>
                <td>${book.grade}</td>
                <td>${book.section}</td>
                <td>${book.bookTitle}</td>
                <td>${book.bookAuthor}</td>
                <td>${book.date}</td>
                <td><button onclick="markReturned(${index})">Mark as Returned</button></td>
            `;
        });
    }

    function markReturned(index) {
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        borrowedBooks.splice(index, 1);
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
        displayBorrowedBooks();
    }

    function autoDeleteData() {
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        let now = new Date().getTime();
        borrowedBooks = borrowedBooks.filter(book => {
            let bookTime = new Date(book.date).getTime();
            return now - bookTime < 7 * 24 * 60 * 60 * 1000;
        });

        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
        displayBorrowedBooks();
    }

    function updateTimer() {
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        if (borrowedBooks.length === 0) {
            countdownTimer.textContent = "No data to delete.";
            return;
        }

        let oldestBook = new Date(borrowedBooks[0].date).getTime();
        let expiryTime = oldestBook + 7 * 24 * 60 * 60 * 1000;
        let remainingTime = expiryTime - new Date().getTime();

        if (remainingTime <= 0) {
            autoDeleteData();
            return;
        }

        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        countdownTimer.textContent = `Data will be deleted in ${hours} hours and ${minutes} minutes`;
    }

    setInterval(updateTimer, 60000);
    loadBooks();
    displayBorrowedBooks();
});
