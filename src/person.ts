import { convertToValueArray } from "./utils";

export interface Person {
  name: String;
}

const person: Person = {
  name: "Mahesh"
};

const firstPerson = convertToValueArray(person)[0];

const name = firstPerson.age;
console.log("name", name);

export const isValidString = (value: String): Boolean => {
  return value !== undefined && value.length !== 0;
};

export const isValidArrayOfPerson = (value: Array<Person>): Boolean => {
  return value !== undefined && value.length !== 0;
};
