// Task
// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

type MyAwaited<P extends Promise<any>> = P extends Promise<infer R> ? R : unknown;


type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

export {};
