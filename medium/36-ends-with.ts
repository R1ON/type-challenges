// Task
// Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U
// https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md

type EndsWith<First extends string, Second extends string> =
    First extends `${string}${Second}` ? true : false;


type test1 = EndsWith<'abc', 'bc'>; // true
type test2 = EndsWith<'abc', 'abc'>; // true
type test3 = EndsWith<'abc', 'd'>; // false

export {};
