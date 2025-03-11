"use strict";
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(23, 45));
function printDetails(name, age) {
    console.log(`${name} and ${age}`);
}
printDetails("saurabh", 22);
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    printDetails() {
        console.log(`${this.name} and ${this.price}`);
    }
}
let product1 = new Product("Nokia 5233", 2522);
product1.printDetails();
class student {
    constructor(name, roll, address) {
        this.name = name;
        this.roll = roll;
        this.address = address;
    }
    doingTask() {
        console.log(`${this.name} ${this.roll} ${this.address}`);
    }
}
let myStudent = new student("rahul", 12, "delhi");
myStudent.doingTask();
