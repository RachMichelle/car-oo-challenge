class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      if (!Number.isFinite(year) || year <= 0){
        throw new Error ("Invalid Year : " + year);
      }
    }
    honk(){
        return 'Beep!';
    }
    toString(){
        const {make, model, year} = this;
        return `This vehicle is a ${year} ${make} ${model}`
    }
}

class Car extends Vehicle {
    constructor (make, model, year){
        super(make, model, year);
    }
    numWheels = 4;
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
    }
    numWheels = 2;
    revEngine(){
        return "VROOM!"
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
        if (!capacity){
            throw new Error ('Capacity required!')
        }
        if (!Number.isFinite(capacity) || capacity <= 0){
            throw new Error ('Capacity must be a valid, positive number!')
        }
    }
    add(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return 'Nope! Vehicles only in here.';
        }
        else if (this.vehicles.length >= this.capacity){
            return 'Sorry, no more room.'
        }
        else {
            this.vehicles.push(newVehicle);
        }
        return 'Vehicle added!'
    }
}