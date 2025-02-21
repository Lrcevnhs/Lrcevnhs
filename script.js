document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const bookTitle = document.getElementById("book-title");
    const studentName = document.getElementById("student-name");
    const studentGrade = document.getElementById("student-grade");
    const studentSection = document.getElementById("student-section");

    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || ["Sample Book 1", "Sample Book 2"];
        bookTitle.innerHTML = books.map(book => `<option value="${book}">${book}</option>`).join("");
    }

    function saveBorrowedBook(name, grade, section, book) {
        let borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        borrowedBooks.push({ name, grade, section, book, date: new Date().toLocaleString() });
        localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    }

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!studentName.value || !studentGrade.value || !studentSection.value) {
            alert("All fields are required!");
            return;
        }
        saveBorrowedBook(studentName.value, studentGrade.value, studentSection.value, bookTitle.value);
        alert("Book borrowed successfully!");
        studentForm.reset();
    });

    loadBooks();
});
