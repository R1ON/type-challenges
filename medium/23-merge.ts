// Task
// Merge two types into a new type. Keys of the second type overrides keys of the first type.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00599-medium-merge/README.md

type Merge<First, Second> = {
  [i in keyof First | keyof Second]:
    i extends keyof Second
      ? Second[i]
      : i extends keyof First ? First[i] : never;
}


type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}
  
type Result = Merge<foo,coo>; // {name: string, age: number, sex: string}

export {};
