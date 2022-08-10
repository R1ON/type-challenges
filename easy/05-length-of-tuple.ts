// Task
// For given a tuple, you need create a generic Length, pick the length of the tuple


type MyLength<Array extends any[]> = Array['length'];


type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = MyLength<tesla> // 4
type spaceXLength = MyLength<spaceX> // 5


export {}; // fix ts error: "Cannot redeclare block-scoped variable"
