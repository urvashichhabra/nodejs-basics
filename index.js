//ES6
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Posts Length - ${getPostsLength()}`);

//Common js
// const {generateRandomNumber, celsiusToFarhenite} = require("./utils")

// console.log(`Random Number - ${generateRandomNumber()}`)

// console.log(`Celsius To Fahrenhiet - ${celsiusToFahrenhiet(0)}`)
