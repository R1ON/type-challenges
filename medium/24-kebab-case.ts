// Task
// FooBarBaz -> foo-bar-baz
// https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md

type KebabCase<Str extends string> =
  Str extends `${infer First}${infer Other}`
    ? Other extends Uncapitalize<Other>
      ? `${Lowercase<First>}${KebabCase<Other>}`
      : `${Lowercase<First>}-${KebabCase<Other>}`
    : Str;


type test1 = KebabCase<'FooBarBaz'> // 'foo-bar-baz'
type test2 = KebabCase<'fooBarBaz'> // 'foo-bar-baz'
type test3 = KebabCase<'foo-bar'> // 'foo-bar'
type test4 = KebabCase<'foo_bar'> // 'foo_bar'
type test5 = KebabCase<'Foo-Bar'> // 'foo--bar'
type test6 = KebabCase<'ABC'> // 'a-b-c'
type test7 = KebabCase<'-'> // '-'
type test8 = KebabCase<''> // ''
type test9 = KebabCase<'😎'> // '😎'

export {};
