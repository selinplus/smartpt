// name属性转换text属性，以适配前端需要
exports.nameToText = result => Object.keys(objArray).map(key => {
    objArray[key].text = objArray[key].name;
    delete objArray[key].name;
    return objArray[key];
})