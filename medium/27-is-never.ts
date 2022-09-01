// Task
// Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.
// https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md

type IsNever<Value> = [Value] extends [never] ? true : false;

type test1 = IsNever<never> // true
type test2 = IsNever<never | string> // false
type test3 = IsNever<''> // false
type test4 = IsNever<undefined> // false
type test5 = IsNever<null> // false
type test6 = IsNever<[]> // false
type test7 = IsNever<{}> // false

export { IsNever };
