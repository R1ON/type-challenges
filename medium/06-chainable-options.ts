// Task
// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get().
// In option, you can extend the current config type by the given key and value. We should about to access the final result via get.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md

type Chainable<Data = {}> = {
    option<Key extends string, Value>(key: Key, value: Value): Chainable<Data & { [i in Key]: Value }>;
    get(): Data;
};

declare const config: Chainable

const result: Result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}

export {};
