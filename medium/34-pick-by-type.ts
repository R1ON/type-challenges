// Task
// From T, pick a set of properties whose type are assignable to U.
// https://github.com/type-challenges/type-challenges/blob/main/questions/02595-medium-pickbytype/README.md

type PickByType<Obj, Type> = {
    [i in keyof Obj as Obj[i] extends Type ? i : never]: Obj[i];
};


interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type test1 = PickByType<Model, boolean>; // { isReadonly: boolean; isEnable: boolean }
type test2 = PickByType<Model, string>; // { name: string }
type test3 = PickByType<Model, number>; // { count: number }

export {};
