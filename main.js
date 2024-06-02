// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }
];

var totalPriceJuice = itemsArray[0].price * itemsArray[0].quantity;
var totalPriceCookie = itemsArray[1].price * itemsArray[1].quantity;
var totalPriceShirt = itemsArray[2].price * itemsArray[2].quantity;
var totalPricePen = itemsArray[3].price * itemsArray[3].quantity;
var total = totalPriceJuice + totalPriceCookie + totalPriceShirt + totalPricePen;
console.log(total);


// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.

var person = {
    name: "John",
    email: "QkTqH@example.com",
    password: "123456",
    age: 25,
    gender: "male",
    city: "New York",
    country: "USA"
};

if ("age" in person && "country" in person) {
    console.log("Both properties exist.");
} else {
    console.log("One or both properties do not exist.");

}

if ("firstName" in person && "lastName" in person) {
    console.log("Both properties exist.");
} else {
    console.log("One or both properties do not exist.");
}

// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.

var Car = function (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var car1 = new Car("Toyota", "Camry", 2020);
var car2 = new Car("Honda", "Civic", 2021);

console.log(car1, car2);

// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

var constructor = function

    (name, gender, address, education, profession) {
        this.name = name;
        this.gender = gender;
        this.address = address;
        this.education = education;
        this.profession = profession;
    }

var record1  = new constructor("John", "male", "New York", "Bachelor", "Engineer");

var record2  = new constructor("Jane", "female", "New York", "Bachelor", "Engineer");

var record3  = new constructor("Jack", "male", "New York", "Bachelor", "Engineer");

var record4  = new constructor("Jill", "female", "New York", "Bachelor", "Engineer");

var record5  = new constructor("Jenny", "female", "New York", "Bachelor", "Engineer");

console.log(record1, record2, record3, record4, record5);




//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.