// Task
// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

type TupleToUnion<Array extends any[]> = Array[number];

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // '1' | '2' | '3'

export {};
