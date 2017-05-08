// Part 1
// Create a Node.js application that does the following:
// - Takes in one parameter from the command line, the name of a country. Note: command line arguments can be read from the global array `process.argv`
// - Reads and parses the `countries.json` file. Note: you must use readFile and not readFileSync. Get it here: countries.jsonView in a new window
// - Outputs information about that specific country. Must be in the following format:
// Country: <country name>
// Top Level Domain: <tld>

var fileReader = require("./json-file-reader");

fileReader.fileReader("./countries.json", function(parsedData){

	for (var i = 0; i < parsedData.length; i++) {		
		var country = process.argv[2];
		if (country === parsedData[i].name) {
			console.log(parsedData[i].name);
			console.log(parsedData[i].topLevelDomain);
		}
	}
})