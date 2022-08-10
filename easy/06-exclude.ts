// Task
// Implement the built-in Exclude<T, U>
// Exclude from T those types that are assignable to U
// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

type MyExclude<Type, ExcludedType> = Type extends ExcludedType ? never : Type;


type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
