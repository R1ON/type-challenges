// Task
// Implement a generic First<T> that takes an Array T and returns it's first element's type.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md

type MyFirst<Array extends any[]> = Array[0];


type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = MyFirst<arr1> // 'a'
type head2 = MyFirst<arr2> // 3

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
