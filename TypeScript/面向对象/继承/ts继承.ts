

// 定义一个动物类
class Animal{
    name: string;
    age: number;
    big: boolean;

    constructor(name: string, age: number, big: boolean) {
        this.name = name;
        this.age = age;
        this.big = big;
    };

    sayHellow() {
        console.log("jiaojiao");
    }
}

// 继承后子类会拥有父类的所有属性和方法；
// 通过继承可以将多个类中共有的代码写在一个父类中，这样我们只需要写一次
// 如果要在子类中添加父类没有的属性或者方法直接加上就可以
// 如果子类和父类都有sayHello这个方法，在调用时，会使用子类的   （方法重写）

// Dog 继承 Animal
class Dog extends Animal{
    run() {
        console.log('狗再跑');
    };
    sayHellow() {
        console.log("wangwangwang")
    }
}

const dog = new Dog('wangcai', 5, false);


// Cat 继承 Animal
class Cat extends Animal{
    see() {
        console.log("猫看狗在跑");
    }
    sayHellow() {
        console.log("miaomiaomiao")
    }
}

const cat = new Cat('mm', 1, false);