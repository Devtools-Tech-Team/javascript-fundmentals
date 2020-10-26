/* Conversting Regular Functions to Arrow Functions */

// example 1

function foo(items){
    return items.map(function(item){
        return item * 5;
    })
}

const foo = items => items.map(item => item * 5);

//example 2
function bar(a, b) {
    if(a + b > 100){
        return 'YES';
    }
    else {
        return 'NO';
    }
}
const bar = (a, b) => a + b > 100 ? 'YES' : 'NO';

//example 3
function outer(x){
    return function inner(y){
        if(x * 2 > 100) {
           let temp = 0;
            setTimeout(function print() {
                temp = this.q ++;
                return temp;
            }.bind(this), 200);
        }
        else {
            return y.map(function multiplier (k){
                return k * x;
            });
        }
    }
}

const outer = x => y => {
    if(x * 2 > 100) {
        let temp = 0;
        setTimeout(() => (temp = this.q++, temp), 200);
    }
    else {
        return y.map(k => k * x);
    }
};

