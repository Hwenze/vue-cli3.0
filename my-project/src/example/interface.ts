// const getFullName = ({firstName, LastName}) =>{
//     return `${firstName} ${LastName}`
// }

interface NameInfo{
    firstName: string,
    LastName: string
}

const getFullName = ({firstName, LastName}: NameInfo): string =>{
    return `${firstName} ${LastName}`
}

getFullName({
    firstName: 'xiaoze',
    LastName: '23'
})

interface Vegatable{
    color ?: string,
    type: string,
    // [prop: string]: any
    // readonly 只读
}

const getVegatable = ({color, type}: Vegatable)=>{
    return `A ${color ? (color + '') : ''} ${type}`
}

getVegatable({
    // color: 'red',
    type: 'orange',
    size: 2
} as Vegatable)

interface AddFunc{
    (num1: number, num2: number):number
}

// extends继承