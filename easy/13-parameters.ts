// Task
// Implement the built-in Parameters generic without using it.
// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

type MyParameters<Func extends Function> = Func extends (...args: infer R) => any ? R : never;


const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

export {};
