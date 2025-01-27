// app.js
import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const studentForm = document.getElementById('student-form');

// Handle form submission
studentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const grade = document.getElementById('grade').value;
  const section = document.getElementById('section').value;
  const borrowedBook = document.getElementById('borrowed-book').value;

  try {
    await addDoc(collection(db, 'students'), {
      name: name,
      grade: grade,
      section: section,
      borrowedBook: borrowedBook,
      timestamp: new Date()
    });
    alert('Student information saved successfully!');
    window.location.href = 'books.html'; // Redirect to books page
  } catch (error) {
    console.error('Error adding document: ', error);
  }
});
