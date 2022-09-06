// Task
// Drop a specified char from a string.
// https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md


type DropChar<Str, Char> = Str extends `${infer First}${infer Other}`
    ? `${First extends Char ? '' : First}${DropChar<Other, Char>}`
    : Str;
    
        
type test1 = DropChar<'butter fly!', ''>; // 'butterfly!'
type test2 = DropChar<'butter fly!', ' '>; // 'butterfly!'
type test3 = DropChar<'butter fly!', '!'>; // 'butter fly'
type test4 = DropChar<'    butter fly!        ', ' '>; // 'butterfly!'
type test5 = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'
type test6 = DropChar<' b u t t e r f l y ! ', 'b'>; // '  u t t e r f l y ! '
type test7 = DropChar<' b u t t e r f l y ! ', 't'>; // ' b u   e r f l y ! '

export {};
