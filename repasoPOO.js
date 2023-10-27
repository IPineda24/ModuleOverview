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



// Escuchar el evento de envío del formulario
document.getElementById("transportForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Obtener los valores de los campos del formulario
    const transportType = document.getElementById("transportType").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const electric = document.getElementById("electric").checked;
    const year = parseInt(document.getElementById("year").value);

    let transport;

    if (transportType === "Automobile") {
        const wheels = parseInt(document.getElementById("wheels").value);
        transport = new Automobile({ brand, model, electric, year, wheels });
    } else if (transportType === "Airplane") {
        const engines = parseInt(document.getElementById("engines").value);
        transport = new Airplane({ brand, model, electric, year, engines });
    }

    // Obtener la lista de transportes del almacenamiento local (si existe)
    let transports = JSON.parse(localStorage.getItem("transports")) || [];
    
    // Agregar el nuevo transporte al arreglo
    transports.push(transport);

    // Guardar el arreglo actualizado en el almacenamiento local
    localStorage.setItem("transports", JSON.stringify(transports));

    // Limpiar el formulario
    document.getElementById("transportForm").reset();
});
