import { add, sub, mul, div } from "./math.js";

let a = 3, b = 6;

const addition = add(a, b);
const subtraction = sub(a, b);
const multiplication = mul(a, b);
const division = div(a, b);

console.table({
  addition,
  subtraction,
  multiplication,
  division
});