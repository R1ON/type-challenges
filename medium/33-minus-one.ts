// Task
// Given a number (always positive) as a type. Your type should return the number decreased by one.
// https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md


type MinusOne<Num extends number> = GetFilledArray<`${Num}`> extends [number, ...infer Other]
  ? Other['length']
  : 0;

type GetFilledArray<Str extends string, Data extends 1[] = []> =
  Str extends `${infer First extends keyof Dictionary}${infer Other}`
    ? GetFilledArray<Other, [...CopyDictionaryTenTimes<Data>, ...Dictionary[First]]>
    : Data;

type CopyDictionaryTenTimes<Arr extends 1[]> = [
  ...Arr, ...Arr, ...Arr, ...Arr, ...Arr,
  ...Arr, ...Arr, ...Arr, ...Arr, ...Arr,
];

type Dictionary = {
  '0': [],
  '1': [1],
  '2': [1,1],
  '3': [1,1,1],
  '4': [1,1,1,1],
  '5': [1,1,1,1,1],
  '6': [1,1,1,1,1,1],
  '7': [1,1,1,1,1,1,1],
  '8': [1,1,1,1,1,1,1,1],
  '9': [1,1,1,1,1,1,1,1,1],
};


type test1 = MinusOne<1>; // 0
type test2 = MinusOne<55>; // 54
type test3 = MinusOne<3>; // 2
type test4 = MinusOne<100>; // 99
type test5 = MinusOne<1101>; // 1100

export {};

// MinusOne<345> => 345 - convert to string => '345'
// --- 1 iteration ---
// Data = [] => empty storage
//
// '345'
// '{infer F}{infer O}' => F = 3, O = 45
// Step1. Data*10 => [[], [], [], [], ...6x[]]
// Step2. Dictionary[F] => [1,1,1]
// Step3. [...Step1, ...Step2] => [1x0, 1x3] => [1,1,1] // length = 3
//
// --- 2 iteration ---
// Data = [1,1,1]
//
// '45'
// '{infer F}{infer O}' => F = 4, O = 5
// Step1. Data*10 => [[1,1,1], [1,1,1], [1,1,1], ...7x[1,1,1]]
// Step2. Dictionary[F] => [1,1,1,1]
// Step3. [...Step1, ...Step2] => [1x30, 1x4] => [1,1,1, ...1x31] // length = 34
//
// --- 3 iteration ---
// Data = [1,1,1, ...1x31]
//
// '5'
// '{infer F}{infer O}' => F = 5, O = ''
// Step1. Data*10 => [[1,1,1, ...1x31], [1,1,1, ...1x31], ...8x[1,1,1, ...1x31]]
// Step2. Dictionary[F] => [1,1,1,1,1]
// Step3. [...Step1, ...Step2] => [1x340, 1x5] => [1,1,1, ...1x343] // length = 345
//
// --- 4 iteration ---
// Data = [1,1,1, ...1x343]
//
// ''
// '{infer F}{infer O}' => No
// return Data
