const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        
    }

    checkService(){
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.schedulesService;
        }


    }

    loadPassenger(num){
        if(this.passenger < this.maxPassengers) {
            if ((num +  this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passemger;
            } else{
                console.log(this.model + " " + this.make + "no enough space for all passengers");
            }
        } else {
            console.log(this.model +" " + this.make + "is full");
        }
    }


 
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
myCar.start()
myCar.loadPassenger()
myCar.stop()
myCar.checkService()
console.log(myCar)
