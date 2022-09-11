// Task
// From T, pick a set of properties whose type are not assignable to U.
// https://github.com/type-challenges/type-challenges/blob/main/questions/02852-medium-omitbytype/README.md

type OmitByType<Obj, Value> = {
    [i in keyof Obj as Obj[i] extends Value ? never : i]: Obj[i];
};


interface Model {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
}

type test1 = OmitByType<Model, boolean>; // { name: string; count: number }
type test2 = OmitByType<Model, string>; // { count: number; isReadonly: boolean; isEnable: boolean }
type test3 = OmitByType<Model, number>; // { name: string; isReadonly: boolean; isEnable: boolean }

export {};
