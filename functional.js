//Функциональное наследование
function Animal (paws) {
   this.paws = paws;
   this.eat = true;
    this.onWhomHunts = function (value) {
        console.log("Охотится на " + value);
    };
    this.whatEating = function (value) {
        console.log("Еда - " + value);
    }
}

function Mouse (paws) {
    Animal.apply(this, arguments);
}

function Eagle(paws) {
    Animal.apply(this, arguments);
}

function Deer(paws) {
    Animal.apply(this, arguments);
}

function Human(paws) {
    Animal.apply(this, arguments);
    var hunts = true;
    this.onWhomHunts = function (value) {
        console.log("Охотится на " + value);
    }
}

function Hunter(paws) {
    Human.apply(this, arguments);
}

function Aborigine(paws) {
    Human.apply(this, arguments);
}

var mouse = new Mouse(4);
mouse.whatEating("Зерно");
var hunter = new Hunter(2);
hunter.onWhomHunts("Deer");