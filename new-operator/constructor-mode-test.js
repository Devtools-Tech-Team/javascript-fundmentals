function MyAwesomeLibrary(config) {
	if (!new.target) {
		return new MyAwesomeLibrary(config);
		// throw new Error('CALL ME WITH NEW OPERATOR!!!!');
	}

	this.there = true;
}

// module.exports = MyAwesomeLibrary;

var awesomeObject = MyAwesomeLibrary({ data: 'Bestest Library Ever!' });
console.log(awesomeObject);
