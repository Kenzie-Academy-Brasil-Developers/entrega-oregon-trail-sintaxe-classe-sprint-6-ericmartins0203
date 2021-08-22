class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        return this.food+=2
    };
    eat() {
        if (this.food>0){
            this.food-=1
        }
        if (this.food===0){
            this.isHealthy = false
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passageiros = [];
    }
    getAvailableSeatCount() {
        return this.capacity-this.passageiros.length
    };
    join(passageiro) {
        if (this.capacity > this.passageiros.length){
           this.passageiros.push(passageiro)
        }
        if (this.capacity=== this.passageiros.length){
           return 'Não tem espaço para ela!'
        }
    }
    shouldQuarantine(){
        let {passageiros} = wagon
        for (let i=0;i<passageiros.length;i++){
            if (passageiros[i].isHealthy === false){
                return true
            }
            
        }
        return false
    }
    totalFood(){
        let {passageiros} = wagon
        let allFood =0
        for (let i=0;i<passageiros.length;i++){
            allFood+= passageiros[i].food
        }
        return allFood
    }
}