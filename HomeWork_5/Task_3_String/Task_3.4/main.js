const fullPage = document.documentElement.outerHTML; 

const regular4HexColors = /#[\d|a-f]{3,6}/g;
const foundHexColors = fullPage.match(regular4HexColors);

const regular4PhoneNumber = /\+\s\(380\)[-| ]0(67|68|96|97|98|50|66|95|99|63|73|93)\s\d{3}\s\d{2}\s\d{2}/g;
const foundPhoneNumbers = fullPage.match(regular4PhoneNumber);

const regular4Script = /<script[^>]+>|<\/script>/g;
const foundScript = fullPage.match(regular4Script);

console.log(`Все значения цветов #HEX в  HTML - ${foundHexColors}`);
console.log(`Все вхождения номера телефона в стандартном виде - ${foundPhoneNumbers}`);
console.log(`Все теги script - ${foundScript}`);