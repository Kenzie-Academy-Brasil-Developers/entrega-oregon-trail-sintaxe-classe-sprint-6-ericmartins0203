class Traveler {
    constructor(name) {
        this._name = name;
        this._food = 1;
        this._isHealthy = true;
    }
    get name(){
        return this._name
    }
    set newName(newName){
        this._name = newName
    }
    get food(){
        return this._food
    }
    set newFood(newFood){
        this._food = newFood
    }
    get isHealthy(){
        return this._isHealthy
    }
    set newIsHealthy(newIsHealthy){
        this._isHealthy = newIsHealthy
    }
    hunt() {
        return this._food+=2
    };
    eat() {
        if (this._food>0){
            this._food-=1
        }
        if (this._food===0){
            this._isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity) {
        this._capacity = capacity;
        this._passageiros = [];
    }
    get capacity(){
        return this._capacity
    }
    set capacity(newCapacity){
        this._capacity = newCapacity
    }
    getAvailableSeatCount() {
        return this._capacity-this._passageiros.length
    };
    join(passageiro) {
        if (this._capacity > this._passageiros.length){
           this._passageiros.push(passageiro)
        }
        if (this._capacity=== this._passageiros.length){
           return 'Não tem espaço para ela!'
        }
    }
    shouldQuarantine(){
        let {_passageiros} = wagon
        for (let i=0;i<_passageiros.length;i++){
            if (_passageiros[i].isHealthy === false){
                return true
            }
            
        }
        return false
    }
    totalFood(){
        let {_passageiros} = wagon
        let allFood =0
        for (let i=0;i<_passageiros.length;i++){
            allFood+= _passageiros[i].food
        }
        return allFood
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
