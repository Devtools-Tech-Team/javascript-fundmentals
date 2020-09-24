var thisReference;

function Person(name, profession) {
	// this = {};

	// fn body executes, can modify this
	this.name = name;
	this.profession = profession;

	thisReference = this;

	// return this;
}

var yomesh = new Person('Yomesh', 'SE');
console.dir(yomesh);
console.log('Are you two same??', thisReference === yomesh);
