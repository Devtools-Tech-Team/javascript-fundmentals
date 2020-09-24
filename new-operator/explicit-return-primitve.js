var thisReference;

function Person(name, profession) {
	this.name = name;
	this.profession = profession;

	thisReference = this;

	// primitive: 2, '2', false
	// non-primitive value X ---> implicit this

	return '2';
}

var yomesh = new Person('Yomesh', 'SE');
console.dir(yomesh === thisReference);
