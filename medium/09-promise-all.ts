// Task
// Type the function PromiseAll that accepts an array of PromiseLike objects,
// the returning value should be Promise<T> where T is the resolved result array.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md

declare function PromiseAll<T extends any[]>(
    promises: readonly [...T],
): Promise<{
    [index in keyof T]: T[index] extends Promise<infer R> ? R : T[index]
}>;


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)

export {};
