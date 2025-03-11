"use strict";
let num = 22;
let firstName = "rahul";
let isValied = true;
let degree = 2;
let avengers = ["ironman", "thor", "captain america", "hulk"];
let person = ["rahul", 22];
let empId = "1234";
let user = {
    id: 1,
    name: "rahul",
    age: 22,
    address: {
        city: "bangalore",
        country: "india"
    }
};
let Teacher = {
    id: 1,
    name: "rahul",
    address: {
        city: "bangalore",
        country: "india"
    },
    age: 22,
    subjects: ["maths", "science"]
};
let category;
var Color;
(function (Color) {
    Color[Color["PrimaryColor"] = 0] = "PrimaryColor";
    Color[Color["SecondaryColor"] = 1] = "SecondaryColor";
    Color[Color["FontColor"] = 2] = "FontColor";
    Color[Color["BackgroundColor"] = 3] = "BackgroundColor";
})(Color || (Color = {}));
console.log(Color.PrimaryColor);
let prod1 = {
    id: 1,
    name: "mobile",
    price: 10000
};
