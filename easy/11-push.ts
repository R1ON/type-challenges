// Task
// Implement the generic version of Array.push
// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

type Push<Array extends any[], Element> = [...Array, Element];

type Result = Push<[1, 2], '3'> // [1, 2, '3']

export {};
