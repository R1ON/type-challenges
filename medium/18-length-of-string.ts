// Task
// Compute the length of a string literal, which behaves like String#length.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md

type ConverStrToArray<Str extends string> =
    Str extends `${infer FirstChar}${infer OtherChars}`
        ? [FirstChar, ...ConverStrToArray<OtherChars>]
        : [];

type MyStrLength<Str extends string> = ConverStrToArray<Str>['length'];

type length = MyStrLength<'hello TypeScript'>; // 16

export {};
