// in linked list each node has data and the next item it points to
// if the next is null that means the node is the last item in the llist
class Node{
  constructor(data,next=null) {
    this.data =data;
     this.next = next;
  }

  hasNext(){
    return this.next ? true:false;
   }
}

class LinkedList{
constructor(){
    this.head = null;
    this.size = 0;
}
insertHead(data){
    // this.head is null now but if there is another value in the list it will be that value
    this.head = new Node(data,this.head);
    this.size++; 
}
printList(){
   let first = this.head;
   while(first){
    console.log(first.data)
    first = first.next;
   }
}
clearList(){
    this.head = null;
    this.size = 0;
}
insertLast(data){
    let node = new Node(data);
if(!this.head){
  this.head = node;
}
else{
    let current = this.head;
    while(current.next){
        current = current.next
    }
    current.next = node;
}
this.size++;
}


hasPrev(node){
    return node !== this.head ? true:false;
}
// removing node from linked  list 

removeNode(node){
 let current = this.head;
 while(current.next){
    if(current.next == node){
        current.next = node.next;
    }
    current = current.next; 
 
}
}
// insterting node at specific point which is quite impossible in array
insetAt(data,index){
if(index > 0 && index <= this.size){
let count = 1;
let current = this.head;
let next = current.next;
if(index == 1){
    this.head = new Node(data,this.head);
    return;
}

else{
    while(current.next){
        count ++;
    if(count === index){
        next = current.next;
        let node = new Node(data,next);
        current.next = node;
        this.size++;
        return node;
    }
    current = current.next;
}

}
}
else{

       return "index out of bound"
   }

}

pop(){
    let current = this.head;
    let prv = null;
    while(current){
        prv =  current.next ? current : prv.next = null;
        current = current.next;
    }
    // console.log("i am the pervious element ", prv)
    // console.log(" i am the current element ",current)
}
}
const linkedL = new LinkedList();
linkedL.insertHead(500);
linkedL.insertHead(400);
linkedL.insertLast(44)
linkedL.insetAt(43,1)
// linkedL.printList();
linkedL.pop()
linkedL.printList()
// linkedL.insertHead(300);
// console.log(linkedL)








