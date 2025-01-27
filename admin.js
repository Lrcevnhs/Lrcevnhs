// admin.js
import { db } from './firebase.js';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';

// Reference to the students collection
const studentsTable = document.getElementById('students-list');

// Fetch student data from Firestore
async function fetchStudentData() {
  const querySnapshot = await getDocs(collection(db, 'students'));
  studentsTable.innerHTML = ''; // Clear the table first

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${data.name}</td>
      <td>${data.grade}</td>
      <td>${data.section}</td>
      <td>${data.borrowedBook}</td>
      <td>${new Date(data.timestamp.seconds * 1000).toLocaleString()}</td>
      <td><button onclick="markAsReturned('${doc.id}')">Mark as Returned</button></td>
    `;
    studentsTable.appendChild(row);
  });
}

// Call fetchStudentData when the page loads
fetchStudentData();

// Mark a book as returned (this will update the Firestore document)
async function markAsReturned(docId) {
  const docRef = doc(db, 'students', docId);
  try {
    await updateDoc(docRef, {
      borrowedBook: 'Returned'
    });
    alert('Book marked as returned!');
    fetchStudentData(); // Refresh the student list
  } catch (e) {
    console.error('Error updating document: ', e);
  }
}
