
const obj = [ {'name':'aaa','ver':1.1,'size':11}, {'name':'bbb', 'ver':1.0, 'size': 28}, {'name': 'ccc', 'ver': 1.8,'size':16}]

console.log(Object.keys(obj));
const result = Object.keys(obj).map(key => {obj[key].text = obj[key].name;delete obj[key].name;return obj[key];});
console.log(result);
// console.log(obj[0].text = obj[0].name);
// console.log(obj[0])