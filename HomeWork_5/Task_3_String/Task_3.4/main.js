let fullPage = document.documentElement.outerHTML; 

let regular4HexColors = /#[0-9|a-f]{3,6}/g;
let foundHexColors = fullPage.match(regular4HexColors);

let regular4PhoneNumber = /\+ \(380\)[-| ]0(67|68|96|97|98|50|66|95|99|63|73|93) [0-9]{3} [0-9]{2} [0-9]{2}/g;
let foundPhoneNumbers = fullPage.match(regular4PhoneNumber);

let regular4Script = /<script[^>]+>|<\/script>/g;
let foundScript = fullPage.match(regular4Script);

console.log(`Все значения цветов #HEX в  HTML - ${foundHexColors}`);
console.log(`Все вхождения номера телефона в стандартном виде - ${foundPhoneNumbers}`);
console.log(`Все теги script - ${foundScript}`);