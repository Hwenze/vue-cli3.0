let prop = 'name';
let info = {
    // name: 'xiaoze'
    [`my${prop}`]: 'xiaoze'
}

let S5 = Symbol('name');
let info2 = {
    [S5]: 'xiaoze'
}

// 枚举
// for in
// Object.keys
// Object.getOwnPropertyNames
// JSON.stringify

// symblo可获取
// Object.getOwnPropertySymbols
// Reflect.ownKeys

// Symbol.for 可寻找相等

// Symbol.keyFor 获取值

// Symbol.isConcatSpreadable 可读写

