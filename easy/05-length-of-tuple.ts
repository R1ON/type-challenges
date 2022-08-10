type MyLength<Array extends any[]> = Array['length'];

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = MyLength<tesla>
type spaceXLength = MyLength<spaceX>


export {}; // fix ts error: "Cannot redeclare block-scoped variable"

// Task
// For given a tuple, you need create a generic Length, pick the length of the tuple

// For example:

// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// type teslaLength = Length<tesla>  // expected 4
// type spaceXLength = Length<spaceX> // expected 5