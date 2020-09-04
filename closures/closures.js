function makeAdder(x){
    var sum = x || 0;
    return function(y){
        return sum += y;
    }
}

var adder = makeAdder(10);
console.dir(adder); // to view the object properties of function adder with closure attached to it
adder(2); // 12
adder(3); // 15