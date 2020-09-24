var thisReference;

function Person(name, profession) {
	this.name = name;
	this.profession = profession;

	thisReference = this;

	// primitive
	// non primitive: [], {}, () => {}

	return function () {
		console.log('I am amazing');
	};
}

var yomesh = new Person('Yomesh', 'SE');
console.log(thisReference === yomesh);
