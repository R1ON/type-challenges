// Task
// Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F.
// C is expected to be either true or false while T and F can be any type.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

type If<Condition extends boolean, First, Second> = Condition extends true ? First : Second;

type A = If<true, 'a', 'b'>  // 'a'
type B = If<false, 'a', 'b'> // 'b'

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
