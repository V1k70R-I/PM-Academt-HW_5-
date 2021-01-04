const string4test = "ECMAScript 2015 (6th Edition, ECMA-262)";
const uppperCase = /[A-Z]/g;

const foundUppperCase = string4test.match(uppperCase);

console.log(foundUppperCase);
