// Task
// Get an Object that is the difference between O & O1
// https://github.com/type-challenges/type-challenges/blob/main/questions/00645-medium-diff/README.md

type NeverOrKey<key, Obj> = key extends keyof Obj ? never : key;
type KeyOrNever<key, Obj> = key extends keyof Obj ? key : never;

type Diff<First, Second, Merged = First & Second> = {
  [
    i in keyof Merged as i extends keyof First
        ? NeverOrKey<i, Second>
        : KeyOrNever<i, Second>
  ]: Merged[i]
};


type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}


type test1 = Diff<Foo, Bar>; // { gender: number }>>,
type test2 = Diff<Bar, Foo>; // { gender: number }>>,
type test3 = Diff<Foo, Coo>; // { age: string; gender: number }>>,
type test4 = Diff<Coo, Foo>; // { age: string; gender: number }>>,




export {};
