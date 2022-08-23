// Task
// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string
// https://github.com/type-challenges/type-challenges/blob/main/questions/00529-medium-absolute/README.md

type Absolute<Value extends number | string | bigint> =
    `${Value}` extends `-${infer R}`
        ? R
        : `${Value}`;


type absolute1 = Absolute<0> // '0'
type absolute2 = Absolute<-0>; // '0'
type absolute3 = Absolute<10>; // '10'
type absolute4 = Absolute<-5>; // '5'
type absolute5 = Absolute<'0'>; // '0'
type absolute6 = Absolute<'-0'>; // '0'
type absolute7 = Absolute<'10'>; // '10'
type absolute8 = Absolute<'-5'>; // '5'
type absolute9 = Absolute<-1_000_000n>; // '1000000'
type absolute10 = Absolute<9_999n>; // '9999'

export {};
