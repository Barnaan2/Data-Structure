//* MY mare implementation of trees

//in tree a node can have one or more children so
// the node is object have list called children.

// there should be some edge called head used ofr
// starting the traversal and building from.
// let me implement binary search tree

class Node{
    constructor(data){
        this.data = data
        this.leftChild = null;
        this.rightChild =  null;
    }
    // add children

}

class Tree{
    constructor(head){
        this.head = head;
    }

    addLftChld(node,child){
        node.leftChild = child
    }
    addRhtChld(node,child){
node.rightChild = child
    }
}

let head = new Node(5);
let node = new Node(6);
let node2 = new Node(7);
let tree = new Tree(head);

tree.addLftChld(head,node);
tree.addRhtChld(head,node2);
console.log(tree)
