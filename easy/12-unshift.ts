// Task
// Implement the type version of Array.unshift
// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md

type Unshift<First extends any[], Second> = [Second, ...First];

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
