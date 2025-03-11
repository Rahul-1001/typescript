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
    constructor() {
        this.name = "";
        this.price = 0;
    }
    printDetails() {
        console.log(`${this.name} and ${this.price}`);
    }
}
let product = new Product();
product.name = "samsung M51";
product.price = 20000;
product.printDetails();
let product1 = new Product();
product1.name = "nokia M51";
product1.price = 10000;
product1.printDetails();
let product2 = new Product();
product2.name = "i phone";
product2.price = 50000;
product2.printDetails();
