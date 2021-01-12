function Node(data, left, right) { // 定义树的节点
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() { // 遍历打印的时候用到
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.getMin = getMin;
    this.getMax = getMax;

}

function insert(data) {
    let n = new Node(data, null, null); // 插入的新节点
    if (this.root === null) { // 判断是不是根节点
        this.root = n;
    } else { 
        let current = this.root; // 拿到根节点，作为查找的起点
        let parent;  
        while (true) { // 遍历
            parent = current; // 存储插入节点
            if (data < current.data) {
                current = current.left; // 进入下一层
                if (current === null) {
                    parent.left = n;
                    // console.log(parent.left);
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    // console.log(parent.right);
                    break;
                }
            }
        }
    }
}

function inOrder(node) { // 中序遍历
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + ' ');
        inOrder(node.right);
    }
}

function preOrder(node) {  // 先序遍历
    if (node !== null) {
        console.log(node.show() + ' ');
        inOrder(node.left);
        inOrder(node.right);
    }
}

function postOrder(node) {  // 后序遍历
    if (node !== null) {
        inOrder(node.left);
        inOrder(node.right);
        console.log(node.show() + ' ');
    }
}

function getMin() {  // 拿到最小值，一直在左节点
    let current = this.root;
    while(current.left !== null){
        current = current.left;
    }
    return current.data;
}

function getMax() {  // 拿到最大值，一直在右节点
    let current = this.root;
    while(current.right !== null){
        current = current.right;
    }
    return current.data;
}

var bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
bst.insert(12);
bst.insert(11);
bst.insert(65);
console.log('中序遍历');
inOrder(bst.root);
console.log('-------------')
console.log('先序遍历');
preOrder(bst.root);
console.log('-------------')
console.log('后序遍历');
postOrder(bst.root);
console.log('-------------')
console.log('最小数值');
console.log(bst.getMin());
console.log('-------------')
console.log('最大数值');
console.log(bst.getMax());