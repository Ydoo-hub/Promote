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

function fun2<Ty extends myTy>(a: Ty):number{
    return a.length;
}