// Task
// Implement a type ReplaceKeys, that replace keys in union types,
// if some type has not this key, just skip replacing, A type takes three arguments.
// https://github.com/type-challenges/type-challenges/blob/main/questions/01130-medium-replacekeys/README.md


type ReplaceKeys<Nodes, Union, Data> = {
    [i in keyof Nodes]: i extends Union
        ? i extends keyof Data ? Data[i] : never
        : Nodes[i];
};

  
type NodeA = {
    type: 'A'
    name: string
    flag: number
}

type NodeB = {
    type: 'B'
    id: number
    flag: number
}

type NodeC = {
    type: 'C'
    name: string
    flag: number
}

type ReplacedNodeA = {
    type: 'A'
    name: number
    flag: string
}

type ReplacedNodeB = {
    type: 'B'
    id: number
    flag: string
}

type ReplacedNodeC = {
    type: 'C'
    name: number
    flag: string
}

type NoNameNodeA = {
    type: 'A'
    flag: number
    name: never
}

type NoNameNodeC = {
    type: 'C'
    flag: number
    name: never
}

type Nodes = NodeA | NodeB | NodeC
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB


type test1 = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>; // ReplacedNodes
type test2 = ReplaceKeys<Nodes, 'name', { aa: number }>; // NodesNoName

export {};
