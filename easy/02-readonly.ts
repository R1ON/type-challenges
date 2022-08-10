// Task:
// Implement the built-in Readonly<T> generic without using it.
// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md

type MyReadonly<Type> = { readonly [key in keyof Type]: Type[key] };


interface Todo {
    title: string
    description: string
}

const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
}

// todo.title = "Hello" // Cannot assign to 'title' because it is a read-only property.
// todo.description = "barFoo" // Cannot assign to 'description' because it is a read-only property.

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
