// console.log("We are learning modules in node js")

// const { sum, sub, mul, div } = require("./utils")
import { sum, sub, mul, div } from "./utils.js"

console.log("adding two number = ", sum(20, 30));
console.log("subtracting two number = ", sub(20, 30));
console.log("multiplying two number = ", mul(20, 30));
console.log("dividing two number = ", div(20, 30));