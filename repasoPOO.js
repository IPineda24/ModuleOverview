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

/* 
Encapsulation

Encapsulation in JavaScript is achieved by using private variables and
private methods within a class. While JavaScript doesn't provide native 
support for encapsulation like some object-oriented languages, private 
variables and methods can be simulated using scoping techniques and naming 
conventions
 */
class Car2 {
    constructor({
        brand,
        model
    }) {
        // Private variables (simulated with naming conventions)
        this._brand = brand;
        this._model = model;

        // Public methods
        this.getMake = function () {
            return this._brand;
        };

        this.getModel = function () {
            return this._model;
        };

        this.setMake = function (newBrand) {
            this._brand = newBrand;
        };

        this.setModel = function (newModel) {
            this._model = newModel;
        };
    }
}

const myCar = new Car2({
    brand: "Toyota",
    model: "Camry"
});

// Accessing private variables through public methods
console.log(`Make: ${myCar.getMake()}`); 
console.log(`Model: ${myCar.getModel()}`);

// Modifying private variables through public methods
myCar.setMake("Honda");
myCar.setModel("Accord");

console.log(`Make: ${myCar.getMake()}`); 
console.log(`Model: ${myCar.getModel()}`);

