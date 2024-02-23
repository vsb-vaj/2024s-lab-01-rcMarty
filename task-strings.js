// Check functions which could help you solve these tasks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// 1 =================================
// Write function to parameterize a string.
// Example:
// console.log(parametrize("Javascript is the worst"));
// "javascript-is-the-worst"

// Your code:
export const parametrize = (input) => {
  input = input.toLowerCase();
  input = input.split(" ").join("-");
  return input;
};
console.log(parametrize("Javascript is the worst"));
console.log("1---------------------------------------------------");

// 2 =================================
// Write function that takes object and return sentence
// Example:
// giveSentenceForPerson({name: "Obi-wan", position: "Jedi", age: 40, location: "Starwars universe"})
// ➞ Hello Obi-wan from Starwars universe! It is nice to meet you! You look awesome for your 40, young Jedi!

// Your code:
export const giveSentenceForPerson = (obj) => {
  return `Hello ${obj.name} from ${obj.location}! It is nice to meet you! You look awesome for your ${obj.age}, young ${obj.position}!`;
};
console.log(
  giveSentenceForPerson({
    name: "Obi-wan",
    position: "Jedi",
    age: 40,
    location: "Starwars universe",
  })
);
console.log("2---------------------------------------------------");

// 3 =================================
// Write function that takes string and replace all `a`, `e`, `i`, `o` with *
// Example:
// replace("Hello Javascript") ➞ "H*ll* J*v*scr*pt"

// Your code:
export const replace = (input) => {
  return input.replace(/[aeio]/g, "*");
};
console.log(replace("Hello Javascript"));
console.log("3---------------------------------------------------");
