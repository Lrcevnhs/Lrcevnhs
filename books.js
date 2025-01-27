// books.js
import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const booksList = document.getElementById('books-list');

// Fetch book data and display it
async function fetchBooks() {
  const querySnapshot = await getDocs(collection(db, 'books'));

  querySnapshot.forEach((doc) => {
    const book = doc.data();
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `<p>${book.title}</p><button onclick="borrowBook('${book.title}')">Borrow</button>`;
    booksList.appendChild(bookDiv);
  });
}

// Borrow a book
async function borrowBook(title) {
  alert(`You borrowed ${title}`);
}

fetchBooks(); // Call to fetch books when the page loads
