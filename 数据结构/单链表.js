// 链表中需要一个Node类 来表示节点 其中的element为数据 next为指针
function Node(element) {
    this.element = element;
    this.next = null;
}

// linkedList类 来为插入节点，删除节点，显示列表提供方法，以及其他的辅助方法
function linkedList() {
    this.head = new Node("head");
    // console.log(this.head);
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

function find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) { // 插入的新节点newElement和插在那个数据的后面item
    let newNode = new Node(newElement);
    let currNode = this.find(item);
    // console.log(this);
    newNode.next = currNode.next
    currNode.next = newNode;
}

function display() {
    let currNode = this.head;
    while (currNode.next !== null) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


// 自己写
// function remove (item) {
//     // 删除节点
//     let currNode = this.head;
//     let lastNode;
//     while (currNode.element != item ) {
//         lastNode = currNode;
//         currNode = currNode.next;
//     }
//     lastNode.next = currNode.next;
// }

function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)){
        currNode = currNode.next;
    }
    return currNode;
}


function remove(item) {
    let prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {
        // console.log(prevNode.next.next);
        // console.log()
        prevNode.next = prevNode.next.next;
    }
}

// 实例化
let test = new linkedList();

test.insert('one', 'head');
test.insert('two', 'one');
test.insert('three', 'two');
test.insert('four', 'three');
test.insert('five', 'four');
test.insert('six', 'five');
test.insert('over', 'six');

test.insert('6', 'six');
test.remove('over');
test.display();
