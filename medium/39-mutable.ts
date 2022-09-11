// Task
// Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).
// https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md

type Mutable<Obj> = {
    -readonly [i in keyof Obj]: Obj[i];
}


interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}
  
type List = [1, 2, 3]
  
type test1 = Mutable<Readonly<Todo1>>; // Todo1
type test2 = Mutable<Readonly<List>>; // List

export {};
