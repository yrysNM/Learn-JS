const fs = require("fs");		// The "fs" module has filesystem-related APIs

let options = {					// An object to hold options for our program
								// default options would go  here

};

fs.readFile("config.json", "utf-8", (err, text) => {
	if(err) {
		// If there was an error display a warning, but continue
		console.log("Could not read config file:", err);
	}else {
		//Otherwise parse the file contents and assign to the options object
		Object.assign(options, JSON.parse(text));
	}

	// in either  case, we can now start running the program 
	startProgram(options);
});

function startProgram(op) {
	console.log(op);

	for(let [k, v] of Object.entries(op)) {
		console.log(k + ": " + v);
	}
}


