// Task
// Implement the String to Union type. Type take string argument. The output should be a union of input letters
// https://github.com/type-challenges/type-challenges/blob/main/questions/00531-medium-string-to-union/README.md

type StringToUnion<Str extends string> =
    Str extends `${infer FirstChar}${infer Other}`
        ? FirstChar | StringToUnion<Other>
        : never;


type test1 = StringToUnion<''> // never
type test2 = StringToUnion<'t'> // 't'
type test3 = StringToUnion<'hello'> // 'h' | 'e' | 'l' | 'o'
type test4 = StringToUnion<'coronavirus'> // 'c' | 'o' | 'r' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'

export {};
