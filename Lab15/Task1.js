/*
Student Name: Shivansh Dubey
Student Id: BCS2025369
Roll No.: 2510303490
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 15
Task Number: 1
*/

// Task 1: Promise returning function with resolution for valid marks
function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

// Call checkMarks(80) and print resolved value
checkMarks(80)
    .then((val) => {
        console.log("Resolved value:", val);
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });
