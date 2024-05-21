const { test, expect } = require("bun:test");

test("??= nullish assignment", () => {
  const person = {
    name: "John",
    age: 0,
  };
  // only assigns right operator if left operator is nullish
  person.name ??= "Anonymous";
  person.age ??= 10;
  expect(person).toEqual({
    name: "John",
    age: 0,
  });
});

test("||= logical or assignment", () => {
  const person = {
    name: "John",
    age: 0,
  };
  // only assigns right operator if left operator is falsy
  person.name ||= "Anonymous";
  person.age ||= 10;
  person.hobby ||= "Cooking";
  expect(person).toEqual({
    name: "John",
    age: 10,
    hobby: "Cooking",
  });
});

test("&&= logical and assignment", () => {
  const person = {
    name: "John",
    age: 0,
    weight: 100,
  };
  // only assigns right operator if left operator is truthy
  person.name &&= "Anonymous";
  person.age &&= 10;
  person.hobby &&= "Cooking";
  person.weight &&= 200;
  expect(person).toEqual({
    name: "Anonymous",
    age: 0,
    weight: 200
  });
  expect(person.hobby).toBeUndefined('Does not assign hobby as it is falsy');
});