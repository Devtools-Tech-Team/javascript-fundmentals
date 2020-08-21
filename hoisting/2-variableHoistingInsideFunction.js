


var DEFAULT_SIZE='Medium';

var size = 'Large';

function getSize () {
	if(!size){
        var size = DEFAULT_SIZE;
    }
    return size;
}

console.log('Your size is ' + getSize());
// Output ??