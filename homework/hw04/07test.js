let jsonString = '{"name":"小華","age":20}';

let obj = JSON.parse(jsonString);
console.log(obj.name);

let newJson = JSON.stringify(obj);
console.log(newJson);
