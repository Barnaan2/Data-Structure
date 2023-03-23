//* MY mare implementation of trees

//in tree a node can have one or more children so
// the node is object have list called children.

// there should be some edge called head used ofr
// starting the traversal and building from.
// let me implement binary search tree

//? BTS(Binary search tree implementation)

/*  //*RULES OF BST
1.each node should be unique
2.each node should contain 2 or less branch
3. we store the greater node in right and smaller to left



*/

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;

    }
}


class BST{
    constructor(){
        // the root node to start traversing
        this.root =null;
    }

insert(data){

    if(this.root === null){
        this.root = new Node(data);
        return;
    }
    // root node to start from
    let current = this.root;
    while(true){
        // going to the left 
        if(data > current.data){
            if(current.left){
                current = current.left;
            }
            else{
                current.left = new Node(data);
                return;
            }
        }

        // going to the right
        else if(data < current.data){
            if(current.right){
                current = current.right;
            }
            else{
                current.right = new Node(data);
                return;
            }
        }
    }
}



//travesing the BST in my own logic
/**
 * 1.divide the node to right and left of the root node.
 * 2. when ever i arrive at the leaf node i should restart from the root node.
 * 3.the current node and its immediate parent should be kept in the 
 * 
 * 
 * 
 */

traverse(){
    let root = this.root;
    // let current  = null;
    let current = null;
    let temp = [root];
    let visited = [];


    while(true){
    if(root.left && (! ( visited.includes(root.left.data) )  ) ){
            // let rootBf = root;
            root = root.left;
            // if(!(root)){
            //   visited.push(rootBf.data);
            //  
           }
        

       else  if(root.right && (! ( visited.includes(root.right.data) )  ) ){
        // let rootBf = root;
            
            root = root.right;
        // if(!(root)){
        //   visited.push(rootBf.data);
        //  
         }
            else{
                visited.push(root.data);
                root = this.root
            }





        if(root.left){
            current = root;
            root = root.left;
            temp.push(root);
// this.traverse(root.left);
        }
        else if(root.right){
         visited.push(root.data);
        //  this.traverse(root.right);

        }
        else{
            visited.push(temp.pop());
            temp.pop();
        }
    }
}
}
