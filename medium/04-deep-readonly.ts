// Task
// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
// You can assume that we are only dealing with Objects in this challenge.
// Arrays, Functions, Classes and so on do not need to be taken into consideration.
// However, you can still challenge yourself by covering as many different cases as possible.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

type DeepReadonly<Type> = {
    readonly [i in keyof Type]: Type[i] extends Record<string, any>
        ? DeepReadonly<Type[i]>
        : Type[i];
};


type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }


  const obj: DeepReadonly<X> = {
    x: {
        a: 1,
        b: 'hi',
    },
    y: 'hey',
  }

//   obj.x = 'test';   // Cannot assign to 'x' because it is a read-only property.
//   obj.x.a = 'test'; // Cannot assign to 'a' because it is a read-only property.
//   obj.x.b = 'test'; // Cannot assign to 'b' because it is a read-only property.
//   obj.y = 'test';   // Cannot assign to 'y' because it is a read-only property.

export {};
