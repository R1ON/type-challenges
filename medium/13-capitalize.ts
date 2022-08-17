// Task
// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md

type Capitalize<Str extends string> = Str extends `${infer FirstChar}${infer OtherChars}`
    ? FirstChar extends keyof СharsDictionary
        ? `${СharsDictionary[FirstChar]}${OtherChars}`
        : Str
    : Str;


type Capitalize2<Str extends string> = Str extends `${infer FirstChar}${infer OtherChars}`
    ? `${Uppercase<FirstChar>}${OtherChars}`
    : Str;


type capitalized = Capitalize<'hello world'> // 'Hello world'
type capitalized2 = Capitalize2<'hello world'> // 'Hello world'


export {};

type СharsDictionary = {
    a: 'A',
    b: 'B',
    c: 'C',
    // ...etc
    h: 'H',
    // ...etc
}
