// Task
// Implement the built-in ReturnType<T> generic without using it.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md

type MyReturnType<Func extends Function> = Func extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}
  
type a = MyReturnType<typeof fn> // "1 | 2"


export {}; // fix ts error: "Cannot redeclare block-scoped variable"
