// Task
// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.
// https://github.com/type-challenges/type-challenges/blob/main/questions/01097-medium-isunion/README.md


import { IsNever } from './27-is-never';

type IsUnion<Union, Copy = Union> = IsNever<Union> extends true
  ? false
  : Union extends Copy
    ? [Copy] extends [Union] ? false : true
    : false;


type test1 = IsUnion<string> // false
type test2 = IsUnion<string | number> // true
type test3 = IsUnion<'a' | 'b' | 'c' | 'd'> // true
type test4 = IsUnion<undefined | null | void | ''> // true
type test5 = IsUnion<{ a: string } | { a: number }> // true
type test6 = IsUnion<{ a: string | number }> // false
type test7 = IsUnion<[string | number]> // false

// Cases where T resolves to a non-union type.
type test8 = IsUnion<string | never> // false
type test9 = IsUnion<string | unknown> // false
type test10 = IsUnion<string | any> // false
type test11 = IsUnion<string | 'a'> // false
type test12 = IsUnion<never> // false

export {};
