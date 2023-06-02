let csvjson = require("csvjson");
let fs = require("fs");
const writeJsonFile = require("write-json-file");

let options = {
    delimiter: ",",
    quote: '"'
};

//the file you want to transform must be in same folder and the path should be between ""
let file_data = fs.readFileSync("migration-2018.csv", {
    encoding: "utf8"
});

let result = csvjson.toObject(file_data, options);
console.log(result);

//the file qnd pqth should be write between '' into () 
fs.writeFileSync('./migration-2018.json', JSON.stringify(result, null, 2));