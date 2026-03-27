/**
 * Unit tests for calculator.js
 *
 * Covers all seven supported operations:
 *   - add        (addition)
 *   - subtract   (subtraction)
 *   - multiply   (multiplication)
 *   - divide     (division)
 *   - modulo     (remainder)
 *   - power      (exponentiation)
 *   - squareRoot (square root)
 *
 * Includes image-based examples and edge cases.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 equals 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(15, -5)).toBe(10);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 equals 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('subtracting a larger number gives a negative result', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3.0);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 equals 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplying two negative numbers returns a positive', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplying a positive and a negative number returns a negative', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 equals 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides negative numbers', () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test('divides a negative by a positive', () => {
    expect(divide(-15, 3)).toBe(-5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('5 % 2 equals 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('works with larger numbers', () => {
    expect(modulo(17, 4)).toBe(1);
  });

  test('works with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('works with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  // Edge case: modulo by zero
  test('throws an error when dividing by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('2 ^ 3 equals 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 1 returns itself', () => {
    expect(power(9, 1)).toBe(9);
  });

  test('raises a number to the power of 0 returns 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('works with a negative base', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('works with a fractional exponent', () => {
    expect(power(27, 1 / 3)).toBeCloseTo(3);
  });

  test('works with a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Example from image: √16 = 4
  test('square root of 16 equals 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 144 equals 12', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('square root of 0 equals 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 equals 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a non-perfect square returns correct decimal', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135, 5);
  });

  // Edge case: square root of a negative number
  test('throws an error for negative input', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });

  test('throws an error for large negative input', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });
});
