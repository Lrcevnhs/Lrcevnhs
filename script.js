document.addEventListener("DOMContentLoaded", function () {
    loadBooks();
    loadStudents();
});

function loadBooks() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let bookList = document.getElementById("bookList");
    if (bookList) {
        bookList.innerHTML = "";
        books.forEach((book, index) => {
            let li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author}`;
            let delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.onclick = function () {
                books.splice(index, 1);
                localStorage.setItem("books", JSON.stringify(books));
                loadBooks();
            };
            li.appendChild(delBtn);
            bookList.appendChild(li);
        });
    }
}

document.getElementById("addBookForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ title, author });
    localStorage.setItem("books", JSON.stringify(books));
    loadBooks();
});

function loadStudents() {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let tableBody = document.querySelector("#studentsTable tbody");
    if (tableBody) {
        tableBody.innerHTML = "";
        students.forEach((student, index) => {
            let row = tableBody.insertRow();
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.grade} - ${student.section}</td>
                <td>${student.book}</td>
                <td>${student.borrowTime}</td>
                <td>${student.returnTime || "Not returned"}</td>
                <td>${student.status}</td>
                <td><button onclick="deleteStudent(${index})">Delete</button></td>
            `;
        });
    }
}

function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}

function downloadPDF() {
    alert("PDF Downloading...");
}

function returnBook() {
    alert("Return feature coming soon...");
}
