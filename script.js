const adminEmail = "Lrcevnhs@gmail.com";
const adminPassword = "LrcAdminStaff@evnhs";

// Admin login
document.getElementById("admin-login-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("admin-email").value;
  const password = document.getElementById("admin-password").value;

  if (email === adminEmail && password === adminPassword) {
    alert("Login successful!");
    document.getElementById("admin-login-section").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
    loadBooks();
    loadBorrowedBooks();
  } else {
    alert("Invalid credentials!");
  }
});

// Add book
document.getElementById("add-book-form")?.addEventListener("submit", function(event) {
  event.preventDefault();
  const book = document.getElementById("book-name").value;
  const author = document.getElementById("book-author").value;
  const genre = document.getElementById("book-genre").value;

  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.push({ book, author, genre });
  localStorage.setItem("books", JSON.stringify(books));
  loadBooks();
  alert("Book added successfully!");
});

// Load books
function loadBooks() {
  const bookList = document.getElementById("book-list");
  const bookSelect = document.getElementById("book-title");
  bookList.innerHTML = "";
  bookSelect.innerHTML = "";

  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.forEach((b, index) => {
    bookList.innerHTML += `<li>${b.book} by ${b.author} <button onclick="removeBook(${index})">Remove</button></li>`;
    bookSelect.innerHTML += `<option value="${b.book}">${b.book} - ${b.author}</option>`;
  });
}

// Remove book
function removeBook(index) {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  loadBooks();
}
