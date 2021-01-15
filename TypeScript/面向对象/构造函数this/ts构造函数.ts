(function() {
    class Dog{
        name;
        age;
        constructor(name:string, age: number) {
            this.name = '旺财';
            this.age = 3;
        }
    
        back() {
            alert('wangwangwang');
        }
    
        edit(name: string, age?: number) {
            console.log(name, age);
        }
    }
    
    const dog1 = new Dog('1',1);
    const dog2 = new Dog('2',2);
    const dog3 = new Dog('3',3);
    const dog4 = new Dog('4',4);
    // dog1.edit()
})();