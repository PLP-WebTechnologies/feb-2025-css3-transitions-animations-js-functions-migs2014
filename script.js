document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("studentForm");
    const studentInfo = document.getElementById("studentInfo");

    // Load stored student data
    const savedStudent = JSON.parse(localStorage.getItem("student"));
    if (savedStudent) {
        displayStudentInfo(savedStudent);
    }

    studentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const studentData = {
            admissionNo: document.getElementById("admissionNo").value,
            fullName: document.getElementById("fullName").value,
            favoriteSubject: document.getElementById("favoriteSubject").value,
            enrollmentYear: document.getElementById("enrollmentYear").value
        };

        // Save to localStorage
        localStorage.setItem("student", JSON.stringify(studentData));

        displayStudentInfo(studentData);
    });

    function displayStudentInfo(student) {
        studentInfo.innerHTML = `
             <strong>Student Info:</strong> <br>
             Admission No: ${student.admissionNo} <br>
             Name: ${student.fullName} <br>
             Favorite Subject: ${student.favoriteSubject} <br>
             Year of Enrollment: ${student.enrollmentYear} <br>
        `;

        // Add bounce animation
        studentInfo.classList.add("bounce");

        setTimeout(() => {
            studentInfo.classList.remove("bounce");
        }, 500);
    }
});