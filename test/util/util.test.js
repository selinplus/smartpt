
// const obj = [ {'name':'aaa','ver':1.1,'size':11}, {'name':'bbb', 'ver':1.0, 'size': 28}, {'name': 'ccc', 'ver': 1.8,'size':16}]

// console.log(Object.keys(obj));
// const result = Object.keys(obj).map(key => {obj[key].text = obj[key].name;delete obj[key].name;return obj[key];});
// console.log(result);
// console.log(obj[0].text = obj[0].name);
// console.log(obj[0])

// const datainfo = [{ id: 1, name: '李毅', mobile: '18690011234', address: '芝罘' },
//   { id: 2, name: '刘三', mobile: '18660011234', address: '幸福' },
//   { id: 3, name: '刘三', mobile: '18660011234', address: '莱山' },
//   { id: 4, name: '王聪', mobile: '18660061234', address: '幸福' },
//   { id: 5, name: '刘三', mobile: '13963841134', address: '开发区' },
// ];
const ele = { id: 1, name: '李毅', mobile: '18690011234', address: '芝罘' };
// datainfo.forEach(data => { result.push(Object.values(data).join(' ')); });
// datainfo.forEach(data => Object.assign(data, { quantity: 0 }));
// console.log(datainfo);
let {id, ...other} = ele;
const nele = Object.assign({ id: 2 }, other);

console.log(nele);
