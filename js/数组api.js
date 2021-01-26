// 1、join(xx)：将数组的元素组起一个字符串，以xx为分隔符省略的话默认用逗号做分隔符，该方法只传入一个参数（分隔符）
    console.log('-----join----');
    // eg：
        let arr = [1,3,5,7,9]
        console.log(arr.join()); // 1,3,5,7,9
        console.log(arr.join('')); // 13579
        console.log(arr.join('/')); // 1/3/5/7/9
    // eg：实现字符串重复
        function repeatString(str, n) {
            return new Array(n + 1).join(str);
        }
        console.log(repeatString("abc", 3)); // abcabcabc

// 2.includes
// 判断数组是否包含某项，返回true/false
console.log('-----includes----');
console.log(['ss', 'cc', 'qq'].includes('qqq'));    //false
console.log([1, 2, 3, 4, NaN].includes(NaN));    //true

// 3、String(arr)：将数组转变为字符串
console.log('-----String----');
let arr2 = [1, 2, 3];
console.log(String(arr2)); // '1, 2, 3'

// 4、concat()：将数组拼接起来
    // (1)不会修改原数组，返回新数组。
    // (2)如果传给 concat() 的某个参数本身是一个数组，则会将该数组的元素衔接到 arr 中，而不是数组本身。
        let arr3 = [1, 2, 3];
        let arr4 = arr3.concat(4, 5, 6);
        let arr5 = arr3.concat([4, 5, [6]]);
        console.log(arr3, arr4, arr5); // [ 1, 2, 3 ] [ 1, 2, 3, 4, 5, 6 ] [ 1, 2, 3, 4, 5, [ 6 ] ]

// 5.slice(): 截取新数组
    // (1)不会修改原数组，返回新的子数组。
    // (2)含头不含尾。
    // (3)省略第二个参数表示从start位置开始一直截取到末尾。
    // (4)可支持负数参数：-n表示倒数第n个元素，相当于length-n。
console.log('-----slice----');
let arr6 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr6.slice(0)) // [2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr6.slice(0,2)) // [2, 3]
console.log(arr6.slice(-3)) // [7, 8, 9]
console.log(arr6.slice(-3,-1)) // [7, 8]

// 6.splice() 很强大的数组方法，它有很多种用法，可以实现删除、插入和替换。
// 删除：可以删除任意数量的项，只需指定 2 个参数：要删除的第一项的位置和要删除的项数。例如， splice(0,2)会删除数组中的前两项。
// 插入：可以向指定位置插入任意数量的项，只需提供 3 个参数：起始位置、 0（要删除的项数）和要插入的项。例如，splice(2,0,4,6)会从当前数组的位置 2 开始插入4和6。
// 替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。例如，splice (2,1,4,6)会删除当前数组位置 2 的项，然后再从位置 2 开始插入4和6。
// splice()方法始终都会返回一个数组，该数组中包含从原始数组中删除的项，如果没有删除任何项，则返回一个空数组。
console.log('-----splice----');
let arr7 = [1,3,5,7,9,11];
let arrRemoved = arr7.splice(0,2);
console.log(arr7); //[5, 7, 9, 11]
console.log(arrRemoved); //[1, 3]
let arrRemoved2 = arr7.splice(2,0,4,6);
console.log(arr7); // [5, 7, 4, 6, 9, 11]
console.log(arrRemoved2); // []
let arrRemoved3 = arr7.splice(1,1,2,4);
console.log(arr7); // [5, 2, 4, 4, 6, 9, 11]
console.log(arrRemoved3); //[7]

// 7.sort() 在排序时，sort()方法会调用每个数组项的 toString()转型方法，然后比较得到的字符串，以确定如何排序。
// 即使数组中的每一项都是数值， sort()方法比较的也是字符串，因此会出现数字无法正常排序，这个时候就要使用一个回调 return a-b or return b-a;
console.log('-----sort----');
let arr8 = ["d", "a", "c", "b"];
console.log(arr8.sort()); // ["a", "b", "c", "d"]
let arr9 = [33, 24, 41, 3];
console.log(arr9.sort()); // [11, 24, 3, 41]
console.log(arr9.sort((a,b)=>{return b-a}));

// 8.reverse() 反转数组的顺序
console.log('-----reverse----');
let arr10 = [13, 24, 51, 3];
console.log(arr10);
console.log(arr10.reverse()); //[3, 51, 24, 13]
console.log(arr10); //[3, 51, 24, 13](原数组改变)

// 9.push()+pop()
// push(): 可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度。 
// pop()：数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项。
console.log('-----push + pop----');
let arr11 = [12, 17, 16, 20];
console.log(arr11.push('push', 'push2', 'push3')); // 返回数组长度,可以添加任意项，用逗号隔开
console.log(arr11);
console.log(arr11.push(...arr10)); // 可以使用扩展运算符，添加每一项；
console.log(arr11.pop()); // 返回被移出的项，只能移除最后一项,如果数组为空返回undefined；

// 10.shift()+unshift() 跟上面的push和pop相反
// shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
// unshift():将参数添加到原数组开头，并返回数组的长度 。
console.log('-----shift + unshift----');
let arr12 = [12, 17, 16, 20];
console.log(arr12.unshift('push', 'push2', 'push3')); // 返回数组长度,可以添加任意项，用逗号隔开
console.log(arr12.unshift(...arr10)); // 可以使用扩展运算符，添加每一项；
console.log(arr12);
console.log(arr12.shift()); // 返回被移出的项，只能移除最后一项,如果数组为空返回undefined；

// 11.forEach() 对数组进行遍历循环，对数组中的每一项运行给定函数。
// 这个方法没有返回值。参数都是function类型，默认有传参，参数分别为：遍历的数组内容；对应的数组索引，数组本身。
console.log('-----forEach----');
let arr13 = [1, 2, 3, 4, 5];
    arr13.forEach((item, index, array) => { // 第一项是内容，第二项是下标，第三项是数组本身
    console.log(item + '-' + index + '-' + (array === arr));
});

// 12.map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
// 下面代码利用map方法实现数组中每个数求平方。
console.log('-----map----');
let arr14 = [1, 2, 3, 4, 5];
let arr15 = arr14.map((item) => {
    return item * item
});
console.log(arr15);

// 13.some() ：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
console.log('-----some----');
let arr16 = [1, 2, 3, 4, 5];
let arr17 = arr16.some(x => x === '3'); 
console.log(arr17); //true
let arr18 = arr.some(x => x<1); 
console.log(arr18); // false


// 14.every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
console.log('-----every----');
let arr19 = arr16.every(x => x<10); 
console.log(arr19); //true
let arr20 = arr16.every(x => x<3); 
console.log(arr20); // false

// 115.filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
console.log('-----filter----');
let arr21 = arr16.filter((item, index) => {
　　return index % 2 === 0 && item <= 4;
}); 
console.log(arr21); //[1, 4, 7, 8, 9, 10]

// 16.indexOf()+lastIndexOf()
// indexOf()：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的开头（位置 0）开始向后查找。 
// lastIndexOf：接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。其中， 从数组的末尾开始向前查找。
// 这两个方法都返回要查找的项在数组中的位置，或者在没找到的情况下返回-1。在比较第一个参数与数组中的每一项时，会使用全等操作符。
console.log('-----indexOf + lastIndexOf----');
let arr22 = [1,3,5,7,7,5,3,1];
console.log(arr22.indexOf(5)); //2
console.log(arr22.lastIndexOf(5)); //5
console.log(arr22.indexOf(5,2)); //2
console.log(arr22.lastIndexOf(5,4)); //2

// 17.reduce()+reduceRight() reduce从左到右 reduceRight从右到左 
// 这两个方法都接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。
console.log('-----reduce + reduceRight----');
let arr23 = [1,2,3,4,5];
let sum = arr23.reduce((prev, cur, index, array) => {
    console.log(prev + cur);
    return prev + cur;
},10);
console.log(sum, arr23); //25


// 18.Array.form()
// 这个东西就是把一些集合，或者长的像数组的伪数组转换成真的数组，比如arguments，js选择器找到dom集合,
// 还有对象模拟的数组  Array.from(obj / arguments / 伪数组) //返回的是一个数组
console.log('-----form----');
let form = {
　　'0' : 1,
　　length : 1
}
let arr24 = [].slice.call(arguments, 0) //这种方式根from方法是一样的效果
let arr25 = Array.from(form);
console.log(arr25);

// 19.Array.of()
// 把参数合并成一个数组返回，如果参数为空，则返回一个空数组
console.log('-----of----');
let arr26 = Array.of(1,2,3,4,'5');//[1,2,3,4,'5']
console.log(arr26);

// 20.find()+findIndex()
// 找得到返回数组中第一个符合条件的元素，找不到返回undefined, findIndex返回索引,找不到返回-1
console.log([1, 2, 3, 4, 5].find((item) => {return item > 20}));
console.log([1, 2, 3, 4, 5].findIndex((item) => {return item > 1}));


// 21.fill()
// 功能一：字面意思填满，实际功能就是把数组中的每一个元素替换成指定值
// 功能二：指定范围替换，第一个参数替换值，第二个是起始下标，第三个结束下标（不包含）
// 功能三：扩展对象
let arr27 = [1, 2, 3, 4]
arr27.fill(5); //[5,5,5,5]
arr27.fill(6,1,3); //[1,6,6,5]
console.log([].fill.call({length:3},4)); //{0:4,1:4,2:4}

// 22.entries都取/keys取键/values取值
let arr28 = ['a', 'b', 'c'];
for(let key of arr.keys()){
    console.log(key) //0,1,2   
}                  
for(let value of arr.values()){
    console.log(value) //a,b,c 
}               
for(let [key, value] of arr.entries()){
    console.log([key,value]) //[0,'a'],[1,'b'],[2,'c']
} 