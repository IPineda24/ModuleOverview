//Abstraction

/*
Abstraction in JavaScript refers to the concept of simplifying complex systems 
by representing them in a more manageable and understandable way. It involves 
hiding unnecessary details and exposing only the essential features and 
functionalities. 
*/

class Car {
    constructor({
        model,
        brand,
        year
    }) {
        this.model = model;
        this.brand = brand;
        this.year = year;
    }
};
const newCar = new Car({
    model: "XD",
    brand: "Scion",
    year: "2007",
})

console.log(newCar);


