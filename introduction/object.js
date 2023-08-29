#!/usr/bin/node
const Camry = {
    "colour": "silver",
    "reg_no": "725621ABJ",
    "door": 4,
    "fire_ext": true
}

//Object.freeze(Camry);
Camry.fire_ext = false;
Camry.wiper = true;
//console.log(Camry.door);
//console.log(Camry['reg_no']);
console.log(Camry);
