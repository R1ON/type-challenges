// Task
// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K
// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

type MyExclude<Type, ExcludedType> = Type extends ExcludedType ? never : Type;

type MyOmit<Type, Keys> = {
    [Key in MyExclude<keyof Type, Keys>]: Type[Key]
};

type MyOmit2<Type, Keys> = {
    [Key in keyof Type as Key extends Keys ? never : Key]: Type[Key]
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

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
