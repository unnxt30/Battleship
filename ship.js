class Ship{
    constructor(length){
        this.length = length;
        this.numHit = 0;
        this.sunk  = false;
    }
    hit = () =>{
        this.numHit += 1;
    }
    
    isSunk = () => {
        if(this.length <= this.numHit){
            this.sunk = true
            return 1;
        }
        return 0;
    }



};
module.exports = {Ship};




