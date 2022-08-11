// Task:
// implement the built-in Pick<T, K> generic without using it.
// Constructs a type by picking the set of properties K from T
// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md

type MyPick<Type, Keys extends keyof Type> = {
    [i in Keys]: Type[i];
};


interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

export {};
