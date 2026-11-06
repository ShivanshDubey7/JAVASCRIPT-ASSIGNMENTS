/*
Student Name: Shivansh Dubey
Student Id: BCS2025369
Roll No.: 2510303490
Course: B.Tech CSE
Year: Second Year
Subject: JavaScript Programming Lab
Subject Code: BCS354
University: Invertis University, Bareilly
Assignment Number: 12
Task Number: 1
*/

// Task 1: Higher-order function applying a callback twice
function applyTwice(fn, value) {
    return fn(fn(value));
}

function addTen(num) {
    return num + 10;
}

console.log(applyTwice(addTen, 5));
