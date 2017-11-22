/* eslint linebreak-style: ["error", "windows"]*/
// name属性转换text属性，以适配前端需要
'use strict';
exports.nameToText = objArray => Object.keys(objArray).map(key => {
  objArray[key].text = objArray[key].name;
  delete objArray[key].name;
  return objArray[key];
});
