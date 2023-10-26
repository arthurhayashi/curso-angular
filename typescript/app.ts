
import * as _ from 'lodash'
console.log(_.pad("typescript exemples", 40, "="))

class Spacecraft{
    constructor(public propulsor:string){
    }   
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace: ${this.propulsor}`);
    }
    
}


let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

class MillenniumFalcon extends Spacecraft implements Containership{
    cargoContainers: number;
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4;
    }
    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace();
        }
        else{
            console.log(`FAILED TO ENTER INTO HYPERSPACE`);
        }
    }
}


let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

interface Containership{
    cargoContainers: number
}

let goodForJob = (ship: Containership) => ship.cargoContainers > 4;

console.log(`Is falcon good for job ${goodForJob ? 'yes' : 'no'}`);