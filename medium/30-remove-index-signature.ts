// Task
// Implement RemoveIndexSignature<T> , exclude the index signature from object types.
// https://github.com/type-challenges/type-challenges/blob/main/questions/01367-medium-remove-index-signature/README.md

type IsIndexSignature<Index> = string extends Index
    ? never
    : number extends Index
      ? never
      : symbol extends Index
        ? never
        : Index;

type RemoveIndexSignature<Object> = {
  [
    i in keyof Object as
        IsIndexSignature<i> extends never ? never : i
    ]: Object[i];
};



type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}


type test1 = RemoveIndexSignature<Foo>; // { foo(): void }
type test2 = RemoveIndexSignature<Bar>; // { bar(): void; 0: string }
type test3 = RemoveIndexSignature<FooBar>; // { [foobar](): void }
type test4 = RemoveIndexSignature<Baz>; // { bar(): void; baz: string }


export {};
