


var DEFAULT_SIZE='Medium';

var size = 'Large';

function getSize () {
	if(!size){
        var size = DEFAULT_SIZE;
    }
    return size;
}

console.log('Value of getSize is ' + getSize());
console.log('Your size is ' + size);
// Output ??