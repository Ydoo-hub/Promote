/*
    在定义函数或者是类时,如果遇到类型不明确就可以使用泛型


*/

function fn<Koo>(a: Koo): Koo {
    return a;
}

// 可以直接调用具有泛型的函数
let a = fn(10); // 这里没指定泛型，TS会自己进行推断

// 这里是指定泛型
let b = fn<string>('Hello')

function fun<T, K>(A: T,B:K){
    console.log(B)
    return A;
} 

fun<number, string>(123, 'hello');

// 实现泛型的继承
interface myTy{
    length: number
}
// Ty extends myTy 表示泛型Ty必须是myTy实现类（子类）
function fun2<Ty extends myTy>(a: Ty):number{
    return a.length;
}

fun2('myTY');  // 有length
fun2(231) // 这里报错，231没有length
fun2([2]) // 有length


class MyClass<T> {
    name: T;
    constructor(name: T){
        this.name = name;
    }
}

const mc = new MyClass<string>('老孙来也');