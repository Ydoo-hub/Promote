// 链表中需要一个Node类 来表示节点 其中的element为数据 next为指针下一个 prev上一个
function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

// 定义方法类
function linkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findlast = findlast;
    this.remove = remove;
    this.dispReverse = dispReverse;
}

// 查找节点 
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

// 选择一个后面插入
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    if (currNode.next !== null) {
        currNode.next.prev = newNode;
    }
    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
}

// 用find找到节点 前面的连接后面,后面的连接前面
function remove(item) {
    var currNode = this.find(item);
    // console.log('下一个节点'+currNode.next);
    if (currNode.next !== null) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = null;
        currNode.prev = null;
    } else {
        currNode.prev.next = null;
        currNode.prev = null;
    }
}

// 找到最后一个节点
function findlast() {
    var currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
}

// 打印双向链表 反序 / 正序则修改判断条件
function dispReverse() {
    // console.log('currNode.element');
    var currNode = this.head;
    currNode = this.findlast();
    while(!(currNode.prev === null)) {
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}

let test = new linkedList();
// console.log('s');
test.insert('one', 'head');
test.insert('two', 'one');
test.insert('three', 'two');
test.insert('four', 'three');
test.insert('five', 'four');
test.insert('six', 'five');
test.insert('over', 'six');
test.remove('over');
test.insert('6', 'six');
test.dispReverse();
