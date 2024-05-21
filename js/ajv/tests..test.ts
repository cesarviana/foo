import { test, expect } from "bun:test";

import Ajv from "ajv";

class Calculator {
  sum(a: number, b: number) {
    return a + b;
  }

  sub(a: number, b: number) {
    return a - b;
  }
}

test('it sums', () => {
  const calc = new Calculator();
  expect(calc.sum(1, 2)).toBe(3);
});

test('it subtracts', () => {
  const calc = new Calculator();
  expect(calc.sub(1, 2)).toBe(-1);
});

test("first", async () => {
  const ajv = new Ajv();

  const schema = {
    type: "object",
    properties: {
      review: {
        oneOf: [
          { type: 'null' },
          {
            type: "object",
            properties: {
              state: {
                type: "string",
                enum: ["APPROVED", "IN_PROGRESS", "RESOLVED"],
              },
            },
          },
        ],
      },
    },
  };

  const validate = ajv.compile(schema);

  const dataNull = {
    review: null
  }

  const data = {
    review: {
      state: "REJECTED",
    },
  };

  const valid = validate(data);

  expect(valid).toBeFalse();
  expect(validate.errors).toHaveLength(1);
});


// if (schemaInvalid) {
//   errors.push(Errors.INVALID_OBJECT)
// }

// if (afaçdfa) {
//   errors.push(Errors.ERROR_ABACATE, { age: 10 })
// }