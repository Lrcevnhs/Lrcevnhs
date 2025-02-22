// Local Storage Handling
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Manage Books
function addBook() {
    let title = document.getElementById("bookTitle").value.trim();
    let author = document.getElementById("bookAuthor").value.trim();
    if (title && author) {
        let books = getFromLocalStorage("books");
        books.push({ title, author });
        saveToLocalStorage("books", books);
        alert("Book Added!");
        displayBooks();
    }
}
function displayBooks() {
    let books = getFromLocalStorage("books");
    let bookList = document.getElementById("bookList");
    bookList.innerHTML = books.map((b, index) => `<li>${b.title} - ${b.author} <button onclick="deleteBook(${index})">Delete</button></li>`).join('');
}
function deleteBook(index) {
    let books = getFromLocalStorage("books");
    books.splice(index, 1);
    saveToLocalStorage("books", books);
    displayBooks();
}

// Borrowing & Returning
function checkStudent() {
    let student = document.getElementById("studentName").value.trim();
    if (student) {
        document.getElementById("actionSection").style.display = "block";
    }
}
function showBorrow() {
    document.getElementById("borrowSection").style.display = "block";
}
function showReturn() {
    document.getElementById("returnSection").style.display = "block";
}
function borrowBook() {
    alert("Book borrowed successfully!");
}
function returnBook() {
    alert("Book returned successfully!");
}

// Timer for Auto-Delete
function updateTimer() {
    let timeLeft = 7 * 24 * 60 * 60;
    setInterval(() => {
        document.getElementById("timer").innerText = `Data will be deleted in ${timeLeft--} seconds.`;
    }, 1000);
}
