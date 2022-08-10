// Task
// Implement the JavaScript Array.includes function in the type system.
// A type takes the two arguments. The output should be a boolean true or false.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md


type Includes<Array extends any[], Element> = Element extends Array[number] ? true : false;


type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // false
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // true

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
