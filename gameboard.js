class Gameboard {
    
    constructor(){
        this.board = new Array(10);
        this.missed_shot = [];
        this.sink_count = 0;
    }

    init(){ //initilising the gameboard(a 2-d array in this case)
        for(let i = 0; i<10; i+=1){
            this.board[i] = new Array(10); 
        }
        
        for(let i = 0; i<10; i+=1){
            for(let j = 0;j<10; j+= 1){
                this.board[i][j] = {ship: false}
            }
        }
    }

    placeShip = (start, shipObj) => {
        const boardValue = this.board[start[0]][start[1]];
        if(boardValue.ship == false){
            for(let i = 0; i<shipObj.length; i += 1){
                this.board[start[0]][start[1]+i].ship = shipObj
            } 
            return true
        }
        return false
    }

    recieveAttack = (x_coord, y_coord) => {
        if (this.board[x_coord][y_coord].ship == false){
            this.missed_shot.push([x_coord, y_coord]);
            return false
        }     
        let ship = this.board[x_coord][y_coord].ship
        if(ship.sunk = true){
            return false;
        }
        ship.hit();
        if(ship.isSunk()){
            this.sink_count += 1;
        };
        return true;
    }
};


module.exports = {Gameboard}
