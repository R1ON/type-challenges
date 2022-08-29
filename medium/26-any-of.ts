// Task
// Implement Python liked any function in the type system.
// A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md

type EmptyObject = { [i in string]: never };
type Falsy = 0 | '' | false | null | undefined | [] | EmptyObject

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true;



type test1 = AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]> // true
type test2 = AnyOf<[1, '', false, [], {}]> // true
type test3 = AnyOf<[0, 'test', false, [], {}]> // true
type test4 = AnyOf<[0, '', true, [], {}]> // true
type test5 = AnyOf<[0, '', false, [1], {}]> // true
type test6 = AnyOf<[0, '', false, [], { name: 'test' }]> // true
type test7 = AnyOf<[0, '', false, [], { 1: 'test' }]> // true
type test8 = AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]> // true
type test9 = AnyOf<[0, '', false, [], {}]> // false
type test10 = AnyOf<[]> // false

export {};
