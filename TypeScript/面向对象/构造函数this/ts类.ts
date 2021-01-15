// 使用class关键字来定义一个类
/* 
    对象中主要两个部分
        属性
        方法
*/ 

class Person {

    /*
        直接定义的属性是实例属性，需要通过实例对象调用（比如下面的per）
            const per = new Person();
            per.name;
        
        使用 static 开头的属性是静态属性（类属性），可以直接通过类调用
            static name1 = '静态属性'
            Person.name1
        使用了 readonly 会让属性变成只读属性（实例属性和类属性都可以用）
            school = 'gcu'
            readonly school = 'gcu' // 只读
    */

    // 定义实例属性
    name = 'me';
    age = 0;

    // 不可修改
    readonly school = 'gcu';
    
    // 定义静态属性
    static name1 = '静态属性';

    // static + readonly 
    static readonly name2 = '静态不可修改';

    // 定义方法
    sayHello() {
    // static sayHello() {       // 和上面一样，可以直接通过类调用
        console.log('hello');
        // this 就是谁new就指向谁
    }
}

const per = new Person();

console.log(per.name, per.age, per);
console.log(Person.name1); // undefined Person是静态属性，不是实例属性
per.name = '修改';
console.log(per.name);
Person.name1 = 'ssss';
console.log(Person.name1);

per.sayHello();
