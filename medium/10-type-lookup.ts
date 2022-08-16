// Task
// Sometimes, you may want to lookup for a type in a union to by their attributes.
// In this challenge, we would like to get the corresponding type by searching for the common type field in the union Cat | Dog.
// In other words, we will expect to get Dog for LookUp<Dog | Cat, 'dog'> and Cat for LookUp<Dog | Cat, 'cat'> in the following example.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md

type LookUp<Union extends { type: any }, Type> = Union extends { type: Type } ? Union : never;


interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Cat | Dog, 'dog'> // `Dog`
type MyDogType2 = LookUp<Cat | Dog, 'cat'> // `Cat`

export {};
