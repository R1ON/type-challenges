// Task
// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

type MyAwaited<P extends Promise<any>> = P extends Promise<infer R> ? R : unknown;


type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
