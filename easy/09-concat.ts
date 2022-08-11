// Task
// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments.
// The output should be a new array that includes inputs in ltr order
// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md


type AnyArray = any[];
type Concat<First extends AnyArray, Second extends AnyArray> = [...First, ...Second];

type Result = Concat<[1], [2]> // [1, 2]
type Result2 = Concat<[1, 2, 3], [2]> // [1, 2, 3, 2]

export {};
