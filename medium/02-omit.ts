// Task
// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K
// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

import { MyExclude } from '../easy/06-exclude';

type MyOmit<Type, Keys> = {
    [i in MyExclude<keyof Type, Keys>]: Type[i]
};

type MyOmit2<Type, Keys> = {
    [i in keyof Type as i extends Keys ? never : i]: Type[i]
};



interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  
  const todo: TodoPreview = {
    completed: false,
  }

export {};
