const fullPage = document.documentElement.outerHTML; 

const regular4HexColors = /#[0-9|a-f]{3,6}/g;
const foundHexColors = fullPage.match(regular4HexColors);

const regular4PhoneNumber = /\+ \(380\)[-| ]0(67|68|96|97|98|50|66|95|99|63|73|93) [0-9]{3} [0-9]{2} [0-9]{2}/g;
const foundPhoneNumbers = fullPage.match(regular4PhoneNumber);

const regular4Script = /<script[^>]+>|<\/script>/g;
const foundScript = fullPage.match(regular4Script);

console.log(`Все значения цветов #HEX в  HTML - ${foundHexColors}`);
console.log(`Все вхождения номера телефона в стандартном виде - ${foundPhoneNumbers}`);
console.log(`Все теги script - ${foundScript}`);