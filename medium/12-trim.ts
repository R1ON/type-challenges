// Task
// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md

type TrimLeft<Str extends string> = Str extends ` ${infer R}` ? TrimLeft<R> : Str;
type TrimRight<Str extends string> = Str extends `${infer R} ` ? TrimRight<R> : Str;

type Trim<Str extends string> = TrimRight<TrimLeft<Str>>;

type trimmed = Trim<'  Hello World  '> // 'Hello World'

export {};
