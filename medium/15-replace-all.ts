// Task
// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md

type ReplaceAll<
    Str extends string,
    From extends string,
    To extends string
> = Str extends `${infer Left}${From}${infer Right}`
    ? ReplaceAll<
        `${Left}${To}${Right}`,
        From,
        To
    >
    : Str;


type replaced = ReplaceAll<'t y p e s', ' ', ''> // 'types'

export {};
