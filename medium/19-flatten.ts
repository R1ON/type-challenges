// Task
// In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00459-medium-flatten/README.md

type Flatten<Array extends any[]> =
    Array extends [infer First, ...infer Other]
        ? First extends any[]
            ? [...Flatten<First>, ...Flatten<Other>]
            : [First, ...Flatten<Other>]
        : Array;

        
type flatten = Flatten<[[1], 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

export {};
