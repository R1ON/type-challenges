// Task
// Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U
// https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md

// Simple
type StartsWith2<First extends string, Second extends string> =  First extends `${Second}${string}` ? true : false;

// ----

// Difficult
type StartsWith<First extends string, Second extends string> = Equals<StringToArray<First>, StringToArray<Second>>;

type Equals<First extends string[], Second extends string[]> =
  Second extends []
    ? true
    : Second[0] extends First[0]
      ? Equals<Shift<First>, Shift<Second>>
      : false;

type Shift<Array extends string[]> = Array extends [string, ...infer T] ? T : [];

type StringToArray<Str extends string, Data extends string[] = []> =
  Str extends `${infer First}${infer Other}`
    ? StringToArray<Other, [...Data, First]>
    : Data;
    

type test1 = StartsWith<'abc', 'ac'>; // false
type test2 = StartsWith<'abc', 'ab'>; // true
type test3 = StartsWith<'abc', 'abcd'>; // false
type test4 = StartsWith<'abc', ''>; // true
type test5 = StartsWith<'abc', ' '>; // false

export {};
