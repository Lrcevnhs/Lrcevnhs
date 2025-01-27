// app.js
import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

// Select the student form
const studentForm = document.getElementById('student-form');

// Handle form submission
studentForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the input values
  const name = document.getElementById('name').value;
  const grade = document.getElementById('grade').value;
  const section = document.getElementById('section').value;
  const borrowedBook = document.getElementById('borrowed-book').value;

  // Save the data to Firestore
  try {
    await addDoc(collection(db, 'students'), {
      name: name,
      grade: grade,
      section: section,
      borrowedBook: borrowedBook,
      timestamp: new Date()
    });
    alert('Student data saved successfully!');
    // Clear the form after submission
    studentForm.reset();
  } catch (e) {
    console.error('Error adding document: ', e);
  }
});
