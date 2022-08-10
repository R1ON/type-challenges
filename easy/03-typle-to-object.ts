// Task:
// Give an array, transform into an object type and the key/value must in the given array.
// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md

type MyTupleToObject1<Type extends readonly any[], Key extends number = number> = {
    [index in Type[Key]]: index;
};

type MyTupleToObject2<Type extends readonly any[]> = {
    [index in Type[number]]: index;
};


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = MyTupleToObject1<typeof tuple>;

// { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result2 = MyTupleToObject2<typeof tuple>; 

export {}; // fix ts error: "Cannot redeclare block-scoped variable"
