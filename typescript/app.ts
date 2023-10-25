class Spacecraft{
    constructor(public propulsor:string){
    }   
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace: ${this.propulsor}`);
    }
    
}


let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

class MillenniumFalcon extends Spacecraft{
    constructor(){
        super('hyperdrive')
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