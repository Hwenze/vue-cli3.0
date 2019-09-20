// 布尔类型
let bool:boolean;
bool = true;

// 数值类型
let num:number = 123;

// 字符串类型
let str:string;
str = "123";

// 数组类型
// [1, 2, 3]
// 写法1
let arr1: number[];
arr1 = [5];
// 写法2
let arr2: Array<number>;
let arr3: (string | number)[];
arr3 = [5, 'a'];

// 元组类型
let tuple: [string, number, boolean];
tuple = ['a', 1, false];

// 枚举类型
enum Roles{
    USER,
    ADMIN,
    SUPER_ADMIN
}

// any类型  任何类型 能不用的时候别用
let value:any;
value = 'a';
value = 1;
value = false;
let arr4: any[] = [1, 'a'];

// void类型
let consoleText = (text:string): void =>{
    console.log(text)
}
let abc:void;
abc = null;

// null 和 undefined
let u: undefined;
u = undefined;
// u = 123;
let n: null;
n = null;
// n = '1';

// never类型
let errorFunc = (message: string): never =>{
    throw new Error(message)
}

// object类型
let obj = {
    name: 'xiaoze'
}
function getObject(obj: object): void{
    console.log(obj)
}
// getObject(obj);

// 类型断言
let getLength = (target: string | number) =>{
    if((<string>target).length || (target as string).length === 0){
        return (<string>target).length
    }else{
        return target.toString().length
    }
}