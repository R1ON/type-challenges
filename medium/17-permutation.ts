// Task
// Implement permutation type that transforms union types into the array that includes permutations of unions.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md

import { MyExclude } from '../easy/06-exclude';


type Permutation<Union, UnionCopy = Union> =
    Union extends infer R
        ? MyExclude<UnionCopy, R> extends never
            ? [R]
            : [R, ...Permutation<MyExclude<UnionCopy, R>>]
        : never;

type perm = Permutation<'A' | 'B' | 'C'>;
// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

export {};
