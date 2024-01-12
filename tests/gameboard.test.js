const { Gameboard } = require("../gameboard.js")
const { Ship } = require("../ship.js")

test("Placing Ships", () => {
    let board1 = new Gameboard();
    board1.init();
    const starting_coord = [0,0];
    const cruiser = new Ship(3);
    board1.placeShip(starting_coord, cruiser)
    expect(board1.board[0][2].ship.length).toBe(3);
    
})
