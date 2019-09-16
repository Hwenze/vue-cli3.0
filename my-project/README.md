# typescript语言
    typescript > es6 > js
    js的超集

## type 类型的意思
    声明一些元素的类型

```
    let str:string = '字符串'
```
    你写代码并不是给自己写代码
    别人用你的代码会乱搞，别人不知道你写方法和组件

```
    function add(x:number, y:number):number {
        return x + y
    }
    add('字符串', [1,2,3]); //直接报错
    add(1, 2); //3
```

## ts更多的好处
    1、为日后的维护代码带来很大的方便
    2、使得代码的可读性更高
    3、你的代码更加安全

## ts不好的地方
    写法麻烦