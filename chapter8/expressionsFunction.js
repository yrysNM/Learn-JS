// This function expression defines a function that squares its argument
// Note that we assign it to variable
const square = function(x) {
	return x * x;
};

//function expressions can include names, which is usful fo  recursion
const f= function fact(x) {
	if(x <= 1){
		return 1;
	}else {
		x * fact(x - 1);
	}
};

// Function expressions can also be used as arguments to other functions:
console.log([3,2, 1].sort(function(a, b) { return a - b; }));

// function expresssions are  sometimes defined and immediately invoked
let tensquared = (function(x) {return x * x;}(10));

console.log(square(4)); 
console.log(f(5));
console.log(tensquared);