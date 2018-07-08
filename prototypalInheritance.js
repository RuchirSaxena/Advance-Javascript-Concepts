/*
 Below is a example of prototypal inheritance in javascript
*/
function SuperAnimal(name) {
    this.name = name;
}

function Animal(name, color, sound) {
    SuperAnimal.call(this, name);
    this.color = color;
    this.sound = sound;

}

//prototypal inheritance =>Parent class => SuperAnimal and Child Class => Animal
Animal.prototype = Object.create(SuperAnimal.prototype);

//Adding function to the proto of Animal
Animal.prototype.animalBasicinfo = function () {
    console.log(`Name of the Animal is: ${this.name} and its colour is: ${this.color} and this animal make this sound: ${this.sound}`);
}

var objAnimal = new Animal("Dolphin", "Black", "kqaaa");

objAnimal.animalBasicinfo();

function Dog(name, color, sound, homelyAnimal) {
    Animal.call(this, name, color, sound);
    this.homelyAnimal = homelyAnimal;

}


Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.specificCharatersticts = function () {
    if (this.homelyAnimal) {
        console.log("yes ! This Dog is a homely animal ,you are awesome:" + this.name);
    } else {
        console.log("No ! its not a homely animal , you should behave like a good dog : " + this.name);
    }
}



var homeDog = new Dog("Pamarian", "White", "Bow Bow", true);
homeDog.specificCharatersticts();
var streetDog = new Dog("Pamarian", "White", "Bow Bow", true);
streetDog.specificCharatersticts();