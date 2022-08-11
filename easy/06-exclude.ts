// Task
// Implement the built-in Exclude<T, U>
// Exclude from T those types that are assignable to U
// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

type MyExclude<Type, Keys> = Type extends Keys ? never : Type;


type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

export { MyExclude };
