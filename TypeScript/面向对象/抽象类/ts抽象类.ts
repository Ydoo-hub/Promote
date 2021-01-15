(function() {
    /*
        抽象类
            在类前面加上abstract 就可以将这个类定义成抽象类
            抽象类不可以被实例化，不可以用来创建对象
            抽象类一般只是被用来做超类，被继承
    */
    abstract class Animal{
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('dongwuzaijiao')
        }

        /*
            抽象方法
                抽象方法使用abstract开头，
                没有方法体
                抽象方法只能定义在抽象类中
                而且子类必须对他进行重写
        */
        abstract eat(): void;
    }


    class Dog extends Animal{
        big: boolean;
        constructor (name,age,big) {
            super(name, age);
            this.big = big;
        }
        sayHello() {
            console.log('汪汪汪');
        }
        eat() {
            console.log('我要吃狗粮');
        }
    }
})();