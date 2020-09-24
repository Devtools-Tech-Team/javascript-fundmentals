function Person(name, profession) {
	this.name = name;
	this.profession = profession;
}

Person.prototype.sayName = function () {
	console.log(this.name);
};

var yomesh = new Person('Yomesh', 'SE');
yomesh.sayName();
console.log(Object.getPrototypeOf(yomesh) === Person.prototype);
