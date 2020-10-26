// 1. function with no parameters ************
function regular(){
    return 2;
}

() => 2; //return 2;
_ => 2; // valid syntax



// 2. single parameter ************
function incrementRegular(a) {
    return a + 1;
}

(a) => a + 1; 
a => a + 1; //recommended syntax

//special cases
(...x) => x.length; // Rest operator
( x = 12 ) => x * 2 ; // default value case 




// 3. multiple parameters that uses a and b ************
function add(a,b){
    return a + b;
}

(a, b, c) => a + b + c;


// 4. concise js expression body ( not statements ) ************

// (a, b) =>  for(let i=0; i< 10; i++){ const temp = i + a; };  // NOT VALID
(a, b) =>  { for(let i=0; i< 10; i++){ const temp = i + a; }; } //PUTTING CURLY BRACKETS AROUND - VALID

(a, b) => a > b ? 'YES': 'NO'; // valid 

// (a, b) => { if(a>b) { return 'YES'} else { return 'NO'}; } // NOT VALID
(a, b) => { if(a>b) { return 'YES'} else { return 'NO'}; } //PUTTING CURLY BRACKETS AROUND - VALID



// 5. when returning objects ************

() => ({ a: 1 }); //valid synatx for returning objects


// 6. multiple JS expressions in concise body ************

x => (x++, x);// beautiful concise body

function test(x){
    x++;
    return x;
}