(function() {

    // 描述一个对象的类型
    type myType = {
        name: string,
        age: number
    }
    
    const obj: myType = {
        name: '小方',
        age: 22
    }

    /*
        接口用来定义一个类结构
            用来定义一个类中应该包含哪些属性和方法
            同时接口也可以当成类型声明去使用
            接口是可以重复声明（两个声明的接口里面的内容加起来）
    */
    interface myTnterface{
        name: string;
        age: number;
    }

    interface myTnterface{
        name: string;
        age: number;
    }

    /*
        接口还可以在定义类的时候去限制类的结构
            接口中所有的属性都不能有实际的值
            接口只定义对象的结构，而不考虑实际值
    */
    interface myTnter{
        name: string;
        sayHello();
    }

    /*
        定义类，可以去实现接口
            实现接口就是使类满足接口的要求
            实现接口使用的是implements
            接口里面的所有方法都是抽象的
    */

    class MyClass implements myTnter{
        name: string;
        constructor(name) {
            this.name = name; 
        }
        sayHello() {
            console.log(this.name)
        }
    }
})