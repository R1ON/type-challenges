// Task
// For given function type Fn, and any type A
// (any in this context means we don't restrict the type, and I don't have in mind any type 😉)
// create a generic type which will take Fn as the first argument, A as the second, and
// will produce function type G which will be the same as Fn but with appended argument A as a last one.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md

type AppendArgument<Func extends Function, ArgValue> =
    Func extends ((...args: infer R) => infer D)
        ? (...args: [...R, ArgValue]) => D
        : Func;


type Fn = (a: number, b: string) => number

// (args_0: number, args_1: string, args_2: boolean) => number
type Result = AppendArgument<Fn, boolean>

export {};
