type First<Array extends any[]> = Array[0];

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1>
type head2 = First<arr2>

export {}; // fix ts error: "Cannot redeclare block-scoped variable"

// Task
// Implement a generic First<T> that takes an Array T and returns it's first element's type.

// For example:

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3