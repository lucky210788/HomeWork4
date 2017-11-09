//Прототипное наследование
function Animal(paws) {
    this.paws = paws;
    this.eat = true;
    this.run = true;
    this.onWhomHunts = function (value) {
        console.log("Охотится на " + value);
    };
    this.whatEating = function (value) {
        console.log("Еда - " + value);
    }
}

Animal.prototype.whatEating = function (value) {
    console.log("Еда - " + value);
};


function Mouse(paws) {
    Animal.apply(this, arguments);
}
Mouse.prototype = Object.create(Animal.prototype);
Mouse.prototype.constructor = Mouse;


function Eagle(paws) {
    Animal.apply(this, arguments);
    this.flight = true;
}
Eagle.prototype = Object.create(Animal.prototype);
Eagle.prototype.constructor = Eagle;


function Deer(paws) {
    Animal.apply(this, arguments);
}
Deer.prototype = Object.create(Animal.prototype);
Deer.prototype.constructor = Deer;


function Human(paws) {
    Animal.apply(this, arguments);
    var hunts = true;
    this.onWhomHunts = function (value) {
        console.log("Охотится на " + value);
    }
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;


function Hunter(paws) {
    Human.apply(this, arguments);
}
Hunter.prototype = Object.create(Animal.prototype);
Hunter.prototype.constructor = Hunter;


function Aborigine(paws) {
    Human.apply(this, arguments);
}
Aborigine.prototype = Object.create(Animal.prototype);
Aborigine.prototype.constructor = Aborigine;


var mouse = new Mouse(4);
mouse.whatEating("Зерно");

var hunter = new Hunter(2);
hunter.onWhomHunts("Deers");

var eagle = new Eagle(2);
eagle.onWhomHunts("mouses");