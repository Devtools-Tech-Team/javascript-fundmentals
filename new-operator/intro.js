// Object created using the regular object notation/syntax
var yomesh = { name: 'Yomesh', profession: 'Software Engineer' };
// similar objects
var ajay = { name: 'Ajay', profession: 'Software Engineer' };
var prithvi = { name: 'Prithvi', profession: 'Software Engineer' };

// Type: Person(name, profession)
// yomesh, ajay, prithvi are instances of this type

// Any function that defines a type, is referred as a constructor function
function Person(name, profession) {
	this.name = name;
	this.profession = profession;
}

var saloni = new Person('Saloni', 'SE'); // instances
console.log(saloni);
