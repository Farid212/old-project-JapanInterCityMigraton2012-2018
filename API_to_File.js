//loading require and FileSystem module
let request = require("request");
let fs = require("fs");

request(
  //your API path and option
  "http://api.e-stat.go.jp/rest/2.1/app/json/getStatsData?appId=9cbfca2625feb0613d943d05f91e7cf4118b0a19&lang=E&statsDataId=0003097041&metaGetFlg=Y&cntGetFlg=N&sectionHeaderFlg=2&cdTime=2017000101"
  //name the file
).pipe(fs.createWriteStream("January2017.json"));


// request("url_path of API you want to parse with all option that are available").pipe(.createWriteStream("nameFile.Extension");