function counter(n) {  		//Function argument n is the private varialbe
	
	return {
		//Property getter method returns and increments private counter var
		get count()  {
			return n++;
		},
		//property setter doesn't allow the  value of n to decrease
		set count(m) {
			if(m >  n) n = m;
			else  throw Error("count can only be set to larger value.")
		}
	};
}

let c = counter(1000);

console.log(c.count); 		// => 1000
console.log(c.count);		// => 1001
c.count = 2000;
console.log(c.count);		// => 2000
c.count = 2000;				// > !Error count  can only be  set to a larger value