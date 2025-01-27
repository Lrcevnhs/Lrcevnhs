import { db, auth } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

// Student login functionality
document.getElementById("student-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("full-name").value;
    const grade = document.getElementById("grade").value;
    const section = document.getElementById("section").value;

    try {
        // Store student data in Firestore
        const docRef = await addDoc(collection(db, "students"), {
            fullName: fullName,
            grade: grade,
            section: section,
            borrowedBooks: []
        });

        alert("Student logged in successfully!");
        window.location.href = "book-selection.html";  // Redirect to book selection page

    } catch (error) {
        console.error("Error adding document: ", error);
    }
});

// Admin button click handler
document.getElementById("admin-button").addEventListener("click", () => {
    const email = prompt("Enter admin email:");
    const password = prompt("Enter admin password:");

    if (email === "Lrcevnhs@gmail.com" && password === "LrcAdminStaff@evnhs") {
        window.location.href = "admin-dashboard.html";  // Redirect to admin dashboard
    } else {
        alert("Invalid credentials!");
    }
});
