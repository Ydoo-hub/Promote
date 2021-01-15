(function() {
    class Animal{
        name: string;
        age: number;
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('dongwuzaijiao')
        }
    }


    class Dog extends Animal{
        big: boolean;

        // 在子类中如果想新增属性就需要继续调用构造器，构造器里面必须使用 super 继承父类构造器的内容。 super里面必须传入对应的参数才可以继续下去

        constructor (name,age,big) {
            super(name, age);
            this.big = big;
        }
        sayHello() {
            // super.sayHello(); fsa
        }
    }
})();