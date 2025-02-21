document.addEventListener("DOMContentLoaded", function () {
    const bookTitle = document.getElementById("book-title");
    const studentForm = document.getElementById("student-form");

    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        bookTitle.innerHTML = books.map(book => `<option value="${book.title}">${book.title} - ${book.author}</option>`).join("");
    }

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const studentName = document.getElementById("student-name").value;
        const studentGrade = document.getElementById("student-grade").value;
        const studentSection = document.getElementById("student-section").value;
        const selectedBook = bookTitle.value;
        const borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];

        borrowedBooks.push({ studentName, studentGrade, studentSection, selectedBook, date: new Date().toLocaleString() });
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
        alert("Book borrowed successfully!");
        studentForm.reset();
    });

    loadBooks();
});
