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

/*
Inheritance

In JavaScript, "inheritance" refers to the mechanism by which an object
or class can inherit properties and methods from another object or class.
This allows for code reuse and the creation of hierarchies of related objects.
*/


class Transport {
    constructor({
        brand,
        model,
        electric = false,
        year
    }) {
        this.brand = brand;
        this.model = model;
        this.electric = electric;
        //Private variable
        this._year = year;

        //public methods
        this.getYear = function () {
            return this._year;
        };
        this.setYear = function (newYear) {
            let date = new Date();
            let thisYear = parseInt(date.getFullYear());
            if (newYear > 1950 && newYear <= thisYear) {
                this._model = newYear;
            } else {
            
                console.log("sorry but this year is no valid");
            }
        };
    }
};

class Automobile extends Transport {
    constructor({
        brand,
        model,
        electric,
        year,
        wheels
    }) {
        super({ brand, model, electric, year });
        this.wheels = wheels;
    }
};

class Airplane extends Transport {
    constructor({
        brand,
        model,
        electric,
        year,
        engines = 1
    }) {
        super({ brand, model, electric, year });
        this.engines = engines;
    }

    fly() {
        console.log(`El avión ${this.brand} ${this.model} está volando.`);
    }
};

const newAuto = new Automobile({
    brand: "Toyota",
    model: "Supra",
    wheels: 4
});
newAuto.setYear(2023);


const newAirplane = new Airplane({
    brand: "Zivko Aeronautics",
    model: "Edge 540",
    year: 1990,
    engines: 2,
});


//mostrar

console.log(newAuto);
console.log(newAirplane);
newAirplane.fly();



