// Task
// Implement a type that adds a new field to the interface. The type takes the three arguments.
// The output should be an object with the new field.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00527-medium-append-to-object/README.md

type AppendToObject<Obj, Key extends string, Value> = {
    [i in keyof Obj | Key]: i extends keyof Obj ? Obj[i] : Value;
};


type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // { id: '1', value: 4 }

export {};
