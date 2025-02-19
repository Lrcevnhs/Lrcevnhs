const adminEmail = "Lrcevnhs@gmail.com";
const adminPassword = "LrcAdminStaff@evnhs";

document.getElementById("student-form").addEventListener("submit", handleStudentBorrow);
document.getElementById("admin-login-form").addEventListener("submit", handleAdminLogin);

function handleStudentBorrow(event) {
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
}

function handleAdminLogin(event) {
  event.preventDefault();

  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;

  if (email === adminEmail && password === adminPassword) {
    alert("Login successful!");
    document.getElementById("admin-login-form").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
    loadBorrowedBooks();
  } else {
    alert("Invalid credentials!");
  }
}

function loadBorrowedBooks() {
  const tableBody = document.querySelector("#borrowed-books-table tbody");
  tableBody.innerHTML = "";

  const studentData = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
  studentData.forEach((data, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.grade}</td>
      <td>${data.section}</td>
      <td>${data.bookTitle}</td>
      <td>${data.dateBorrowed}</td>
      <td>${data.returned ? "Returned" : "Not Returned"}</td>
    `;
    tableBody.appendChild(row);
  });
}
