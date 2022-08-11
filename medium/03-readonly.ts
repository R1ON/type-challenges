// Task
// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly.
// When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

import { MyOmit } from './02-omit';

type MyReadonly2<Type, Keys extends keyof Type = keyof Type> = MyOmit<Type, Keys> & {
    readonly [i in Keys]: Type[i];
};


interface Todo {
    title: string
    description: string
    completed: boolean
}

type Test = MyReadonly2<Todo, 'title' | 'description'>;

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// todo.title = "Hello" // Cannot assign to 'title' because it is a read-only property
// todo.description = "barFoo" // Cannot assign to 'description' because it is a read-only property.
todo.completed = true // OK

export {};
