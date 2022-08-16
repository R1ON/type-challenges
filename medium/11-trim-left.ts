// Task
// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md

type TrimLeft<Str extends string> = Str extends `${infer FirstChar}${infer OtherChars}`
    ? FirstChar extends ' ' ? TrimLeft<OtherChars> : `${FirstChar}${OtherChars}`
    : never;


type trimed = TrimLeft<'  Hello World  '> // 'Hello World  '

export {};
