// Task
// Implement Replace<S, From, To> which replace the string From with To once in the given string S
// https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md

type Replace<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${Right}` : Str;


type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 'types are awesome!'
type replaced2 = Replace<'types are !fun', 'fun', 'awesome'> // 'types are !awesome'
type replaced3 = Replace<'fun types are !', 'fun', 'awesome'> // 'awesome types are !'
type replaced4 = Replace<'types are !', 'fun', 'awesome'> // 'types are !'

export {};
