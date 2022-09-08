// Task
// Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to be required.
// When K is not provided, it should make all properties required just like the normal Required<T>.
// https://github.com/type-challenges/type-challenges/blob/main/questions/02759-medium-requiredbykeys/README.md

type MergeObjects<Obj> = {
    [i in keyof Obj]: Obj[i];
};

// --- with custom NonNullable ---

type RequiredByKeys<Obj, Keys = keyof Obj> = MergeObjects<{
    [i in NonNullable<keyof Obj> as i extends Keys ? i : never]: NonNullable<Obj[i]>;
} & {
    [i in keyof Obj as i extends Keys ? never : i]: Obj[i];
}>;

type NonNullable<T> = T extends null | undefined ? never : T;

// --- with modifier ---
  
type RequiredByKeys2<Obj, Keys = keyof Obj> = MergeObjects<{
    [i in keyof Obj as i extends Keys ? i : never]-?: Obj[i];
} & {
    [i in keyof Obj as i extends Keys ? never : i]: Obj[i];
}>;



interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}


type test1 = RequiredByKeys<User, 'name'>; // UserRequiredName
type test2 = RequiredByKeys<User, 'name' | 'unknown'>; // UserRequiredName
type test3 = RequiredByKeys<User, 'name' | 'age'>; // UserRequiredNameAndAge
type test4 = RequiredByKeys<User>; // User

export {};
