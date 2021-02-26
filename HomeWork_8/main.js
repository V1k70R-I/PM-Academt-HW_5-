// Task 1

const assert = require('assert');

function multiplyBy(multiplicator, ...nums) {
    return nums.map((num) => num * multiplicator);
}

assert.deepStrictEqual(multiplyBy(2, 3, 4, 5), [6, 8, 10]);
assert.deepStrictEqual(multiplyBy(10, 20, 40, 100, 200, 3), [200, 400, 1000, 2000, 30]);

console.log('Looks good');

// Task 2

function flatWhite(arr) {
  return [...arr.flat()];
}

assert.deepStrictEqual(flatWhite(['doppio', ['hot'], 'milk']), ['doppio', 'hot', 'milk']);
assert.deepStrictEqual(flatWhite([['espresso', 'hot'], 'milk']), ['espresso', 'hot', 'milk']);

console.log('Looks good');

// Task 3

function extendWith(...[first, second]) {
    for (const prop in second) {
        if (!first.hasOwnProperty(prop)) {
            first[prop] = second[prop];
        }
    }

    return first;
}

assert.deepStrictEqual(
    extendWith(
        { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },
        { isValid: false, additionalProp: { thisIsGoodProp: 123 } }
    ),
    { flatWhite: ['doppio', 'hot', 'milk'], isValid: true, additionalProp: { thisIsGoodProp: 123 } }
);
assert.deepStrictEqual(
    extendWith({ isValid: false, myMax: 9990 }, { isValidos: false, myMin: 8999 }),
    { isValid: false, myMax: 9990, isValidos: false, myMin: 8999 }
);

console.log('Looks good');

// Task 4

function extendWithEndless(...args) {
  const result = {};

  for (const obj of args) {
      for (const prop in obj) {
          if (obj.hasOwnProperty(prop)) {
              result[prop] = obj[prop];
          }
      }
  }

  return result;
}

assert.deepStrictEqual(
  extendWithEndless(
      { flatWhite: ['doppio', 'hot', 'milk'], isValid: true },
      { isValid: false, additionalProp: { thisIsGoodProp: 123 } },
      { prop3: true },
      { prop4: true },
      { isValid: [false, false] }
  ),
  {
      flatWhite: ['doppio', 'hot', 'milk'],
      isValid: [false, false],
      additionalProp: { thisIsGoodProp: 123 },
      prop3: true,
      prop4: true
  }
);

console.log('Looks good');
