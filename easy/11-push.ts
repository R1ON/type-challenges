// Task
// Implement the generic version of Array.push
// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

type Push<First extends any[], Second> = [...First, Second];

type Result = Push<[1, 2], '3'> // [1, 2, '3']

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
