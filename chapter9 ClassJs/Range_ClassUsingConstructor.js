// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.

function  Range(from , to)
{
	// Store the start and end points (state) of this new range object.
	// These are noninherited properties that are unique to this object
	this.from = from; 
	this.to = to;
}

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.

Range.prototype = {
	// Return true  if x in the range false otherwise
	// This method works for textual and Date ranges as well as numeric
	includes: function(x) {
		return this.from <= x && x <= this.to;
	},

	// A generator function that makes instances of the class iterable.
	// Note that it only works for numeric ranges.
	[Symbol.iterator]: function*() {
		for(let x = Math.ceil(this.from); x <= this.to; x++){
			yield x;
		}
	},

	// Return a string 
	toString: function (){
			return "(" + this.from + "..." + this.to + ")";
	}
	
};

let r= new Range(1, 3);  	// Create a range object: note  the use  of new
console.log(r.includes(2)); // => true: 2 is in the range
console.log(r.toString());  // => (1 ... 3)
console.log([...r]);		// => [1, 2, 3]  convert to  an array


