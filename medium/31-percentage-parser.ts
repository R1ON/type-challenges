// Task
// Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.
// The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.
// https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md


type PercentageParser<Str extends string> = [
    GetFirstChar<Str>,
    GetMiddleString<Str>,
    GetLastChar<Str>,
];
  
type GetFirstChar<Str extends string> =
    Str extends `${infer First}${string}`
        ? First extends '+' | '-' ? First : ''
        : '';

type GetLastChar<Str extends string> =
    Str extends `${string}%`
        ? '%'
        : '';

type GetMiddleString<Str extends string> =
    Str extends `${GetFirstChar<Str>}${infer Middle}${GetLastChar<Str>}`
        ? Middle
        : '';

  
type test1 = PercentageParser<''> // ['', '', '']
type test2 = PercentageParser<'+'> // ['+', '', '']
type test3 = PercentageParser<'+1'> // ['+', '1', '']
type test4 = PercentageParser<'+100'> // ['+', '100', '']
type test5 = PercentageParser<'+100%'> // ['+', '100', '%']
type test6 = PercentageParser<'100%'> // ['', '100', '%']
type test7 = PercentageParser<'-100%'> // ['-', '100', '%']
type test8 = PercentageParser<'-100'> // ['-', '100', '']
type test9 = PercentageParser<'-1'> // ['-', '1', '']
type test10 = PercentageParser<'%'> // ['', '', '%']
type test11 = PercentageParser<'1'> // ['', '1', '']
type test12 = PercentageParser<'100'> // ['', '100', '']
   

export {};
