document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const bookTitle = document.getElementById("book-title");

    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        bookTitle.innerHTML = books.map(book => `<option value="${book.title}">${book.title} - ${book.author}</option>`).join("");
    }

    function saveBorrowedBook(name, grade, section, bookTitle, author) {
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        borrowedBooks.push({ name, grade, section, bookTitle, author, date: new Date().toLocaleString("en-PH") });
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    }

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const studentName = document.getElementById("student-name").value;
        const studentGrade = document.getElementById("student-grade").value;
        const studentSection = document.getElementById("student-section").value;
        const selectedBook = bookTitle.value;

        const books = JSON.parse(localStorage.getItem("books")) || [];
        const bookData = books.find(b => b.title === selectedBook);

        saveBorrowedBook(studentName, studentGrade, studentSection, bookData.title, bookData.author);
        alert("Book borrowed successfully!");
        studentForm.reset();
    });

    loadBooks();
});
