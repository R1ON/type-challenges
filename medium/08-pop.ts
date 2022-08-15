// Task
// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.
// Extra: Similarly, can you implement Shift, Push and Unshift as well?
// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md

type Pop<Array extends any[]> = Array extends [...infer R, infer T] ? R : never;
type Shift<Array extends any[]> = Array extends [infer R, ...infer T] ? T : never;
type Push<Array extends any[], Element> = [...Array, Element];
type Unshift<Array extends any[], Element> = [Element, ...Array];


type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // ['a', 'b', 'c']
type re2 = Pop<arr2> // [3, 2]

type re3 = Shift<arr1> // ['b', 'c', 'd']
type re4 = Shift<arr2> // [2, 1]

type re5 = Push<arr1, 'e'> // ['a', 'b', 'c', 'd', 'e']
type re6 = Push<arr2, 4> // [3, 2, 1, 4]

type re7 = Unshift<arr1, 'e'> // ['e', 'a', 'b', 'c', 'd']
type re8 = Unshift<arr2, 4> // [4, 3, 2, 1]

export {};
