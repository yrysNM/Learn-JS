// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.
//
// The unusual thing about this function is that the property value
// that is manipulated by the getter and setter methods is not stored in
// the object o. Instead, the value is stored only in a local variable
// in this function. The getter and setter methods are also defined
// locally to this function and therefore have access to this local variable.
// This means that the value is private to the two accessor methods, and it
// cannot be set or modified except through the setter method.

function addPRivateProperty(o, name, predicate) {
	let value; 				// This is the property vlaue
	//  The setter method simply returns the value
	o[`get${name}`] = function() { return value; };

	// the setter method stores the value or thrown an exception if the predicate rejects the value
	o[`set${name}`] = function(v) {
		if(predicate && !predicate(v)) {
			throw new TypeError(`set${name}:  invalid value ${v}`);
		}else {
			value = v;
		}
	};
}

	// The following code demonstrates the addPRivateProperty() method
	let o = {}; 		  //Here is an empty object


	//Add property accessor methods getName  and setName() 
	//Ensur that only string values are allowed
	addPRivateProperty(o, "Name", x => typeof x === "string");

	o.setName("Yrysbek"); // Set the property value
	console.log(o.getName());
	o.setName(0);		  // !Type Error: trye to set a value o the wrong  type