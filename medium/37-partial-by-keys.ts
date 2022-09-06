// Task
// Implement a generic PartialByKeys<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to be optional.
// When K is not provided, it should make all properties optional just like the normal Partial<T>.
// https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md


type PartialByKeys<Obj, Keys = keyof Obj> = MergeObjects<{
    [i in keyof Obj as i extends Keys ? i : never]?: Obj[i];
} & {
    [i in keyof Obj as i extends Keys ? never : i]: Obj[i];
}>;

type MergeObjects<Obj> = {
    [i in keyof Obj]: Obj[i];
};


interface User {
    name: string
    age: number
    address: string
}

interface UserPartialName {
    name?: string
    age: number
    address: string
}

interface UserPartialNameAndAge {
    name?: string
    age?: number
    address: string
}
  
  
type test1 = PartialByKeys<User, 'name'>; // UserPartialName
type test2 = PartialByKeys<User, 'name' | 'unknown'>; // UserPartialName
type test3 = PartialByKeys<User, 'name' | 'age'>; // UserPartialNameAndAge
type test4 = PartialByKeys<User>; // Partial<User>
  

export {};
