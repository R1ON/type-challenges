// Task
// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U

type MyExclude<Type, ExcludedType> = Type extends ExcludedType ? never : Type;


type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
