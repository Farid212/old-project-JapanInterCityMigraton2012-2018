let csvjson = require("csvjson");
let fs = require("fs");

//set object with the option of csvjson
let options = {
    delimiter: ",",
    quote: '"'
};

//the file you want to transform must be in same folder and the path should be between ""
let file_data = fs.readFileSync("migration-2018.csv", {
    encoding: "utf8"
});

//transformation csv to json using the option set previously
let result = csvjson.toObject(file_data, options);
console.log(result);

//the file and path should be write between '' into () 
fs.writeFileSync('./migration-2018.json', JSON.stringify(result, null, 2));