// admin-dashboard.js
import { db } from './firebase.js';
import { getDocs, collection } from 'firebase/firestore';

const studentsTable = document.getElementById('students-list');

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
      <td>${data.timestamp.toDate().toLocaleString()}</td>
      <td><button>Mark as Returned</button></td>
    `;
    studentsTable.appendChild(row);
  });
}

fetchStudentData(); // Fetch student data when the page loads
