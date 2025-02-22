document.addEventListener("DOMContentLoaded", function () {
    const studentTable = document.getElementById("studentTable");

    if (studentTable) {
        loadStudentData();
    }

    const borrowForm = document.getElementById("borrowForm");
    if (borrowForm) {
        borrowForm.addEventListener("submit", function (event) {
            event.preventDefault();
            saveStudentData();
        });
    }

    const downloadBtn = document.getElementById("downloadPDF");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            generatePDF();
        });
    }
});

function saveStudentData() {
    let lname = document.getElementById("lname").value;
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let grade = document.getElementById("grade").value;
    let section = document.getElementById("section").value;
    let book = document.getElementById("searchBook").value;
    let borrowedTime = new Date().toLocaleString("en-PH");

    let studentData = JSON.parse(localStorage.getItem("students")) || [];
    studentData.push({ lname, fname, mname, grade, section, book, borrowedTime, returned: false });

    localStorage.setItem("students", JSON.stringify(studentData));
    alert("Book borrowed successfully!");
    location.reload();
}

function loadStudentData() {
    let studentData = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("studentTable");

    studentData.forEach((student, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${student.lname}, ${student.fname} ${student.mname}</td>
            <td>${student.grade}-${student.section}</td>
            <td>${student.book}</td>
            <td>${student.borrowedTime}</td>
            <td>${student.returned ? student.returned : "Not Returned"}</td>
            <td><button onclick="returnBook(${index})">Mark as Returned</button></td>
        `;
    });
}

function returnBook(index) {
    let studentData = JSON.parse(localStorage.getItem("students"));
    studentData[index].returned = new Date().toLocaleString("en-PH");
    localStorage.setItem("students", JSON.stringify(studentData));
    location.reload();
}

function generatePDF() {
    alert("Spreadsheet Downloading...");
}
