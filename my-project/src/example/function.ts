// function add(arg1:number, arg2:number):number{
//     console.log(arg1 + arg2)
// }

let add:(x:number, y:number) => number
add = (arg1:number, arg2:number):number => arg1 +arg2

type Add = (x:number, y:number) => number
let addFunc:Add = (arg1:number, arg2:number):number => arg1 +arg2;
