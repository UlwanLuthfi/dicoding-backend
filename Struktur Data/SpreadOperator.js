// Array
// Spread Operator
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

console.log(...favorites);

const allFavorites = [...favorites, ...others];
console.log(...allFavorites);

// Object
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);
