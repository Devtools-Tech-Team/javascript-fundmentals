function Person(name, profession) {
	// 1. a new empty object is created and assigned to "this" inside the function
	// this = {};

	// 2. the function body executes and can modify "this"
	this.name = name;
	this.profession = profession;

	// 3. The implicit "this" value is returned, if no explicit non-primitive value is returned;
	// return this;
}

var yomesh = new Person('Yomesh', 'SE');
console.dir(yomesh);
