(function() {
    /*
        现在属性是对象中设置的，属性可以任意的被修改
            属性可以被任意修改将会导致对象中的数据变得非常不安全
            ！！！！TS可以在属性钱添加属性的修饰符
                1.public 修饰的属性可以在任意位置被访问（修改）默认值
                2.private 私有属性，私有属性只能在这个类内部进行修改
                3.protected 受保护的属性，只能在当前类和当前类的子类中使用（修改）。
    */
    class Person{
        private name: string;
        private age: number;
        // age: number;
        constructor(name:string, age:number){
            this.name = name;
            this.age = age;
        }


        // getter 方法用来读取属性
        // setter 方法用来设置属性
        // 定义一个方法来获取name
        getName() {
            return this.name
        }

        setName(value) {
            if (0 === 0) { // setter里面加上判断，这样就有控制权
                this.name = value;
            }
        }
    }
})();