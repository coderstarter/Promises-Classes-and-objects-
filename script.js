class Car{
    constructor(make,bhp,cc){
        this.make = make;
        this.brakeHorsePower = bhp;
        this.cc = cc;
        this.running = false;
    }
    start(){
        this.running = true;
        console.log(`Starting car ${this.make} ...🚗`);
    }
    stop(){
        this.running = false;
        console.log(`topping the car ${this.make} ...`);
    }
}

const honda = new Car('Honda', 90, 1200);
honda.start();
honda.stop();