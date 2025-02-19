document.addEventListener("DOMContentLoaded", function () {
  const studentForm = document.getElementById("student-form");
  const bookSelect = document.getElementById("book-title");

  const books = ["Mathematics", "Science", "History", "English", "Computer Science"];
  books.forEach(book => {
    let option = document.createElement("option");
    option.value = book;
    option.textContent = book;
    bookSelect.appendChild(option);
  });

  studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("student-name").value;
    const grade = document.getElementById("student-grade").value;
    const section = document.getElementById("student-section").value;
    const bookTitle = document.getElementById("book-title").value;
    const dateBorrowed = new Date().toLocaleString();

    const studentData = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
    studentData.push({ name, grade, section, bookTitle, dateBorrowed, returned: false });
    localStorage.setItem("borrowedBooks", JSON.stringify(studentData));

    alert("Book borrowed successfully!");
    event.target.reset();
  });
});
