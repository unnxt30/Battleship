const { Ship } = require("../ship.js");

test("checking Not Sunk ", () => {
    const smolShip = new Ship(2);
    smolShip.hit();
    expect(smolShip.isSunk()).toBe(0)
});

test("checking sunk", () =>{
    const bigShip = new Ship(4)
    bigShip.hit()
    bigShip.hit()
    bigShip.hit()
    bigShip.hit()
    
    expect(bigShip.isSunk()).toBe(1)
})
