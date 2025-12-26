const { add, sub } = require('./math');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(sub(5, 3)).toBe(2);
});


    
// import { add, subtract } from './math.js';

// test("adds two numbers", () => {
//   expect(add(2, 3)).toBe(5);
// });

// test("subtracts two numbers", () => {
//   expect(subtract(2, 3)).toBe(-1);
// });
