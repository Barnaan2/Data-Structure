class Node{
    constructor(value){
        this.value = value
        this.edgeList = []
    }
    addAdjcent(node){
        this.edgeList.push(node)
        node.edgeList.push(this)
    }
   
    getAdjcent(){
        return this.edgeList.map((edge)=>{
            return edge.value;
        });
    }
    isConnected(node){
        return this.edgeList.map(edge=>edge).indexOf(node) > -1
    }
}

class Graph{
    constructor(nodes){
        this.nodes = [...nodes]
    }

 addNode(node){
    this.nodes.push(node)
 }


 removeNode(node){
    this.nodes.pop(node)
 }

 
 breadthFirstTraversal(start,end){
const queue = [start]
const visited = new Set()
visited.add(start) 


while(queue.length > 0){
    // pull the node of the queue 
    // add its adjcent to the queue
    const node = queue.shift()
    if(node.value == end.value){
        console.log('found it')
        return
    }
    
    for(const adj of node.edgeList){
        if(!visited.has(adj)){
            queue.push(adj)
            visited.add(adj)
        }
      
    } 
    console.log(node.value)
}
 }
}

const a = new Node('A')
const b = new Node('B') 
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')

a.addAdjcent(b);
a.addAdjcent(d);
b.addAdjcent(c);
c.addAdjcent(e);
c.addAdjcent(d);
d.addAdjcent(e);

// nodeA.connect(nodeB)
// nodeA.connect(nodeD)
// nodeB.connect(nodeC)
// nodeC.connect(nodeE)
// nodeC.connect(nodeD)
// nodeD.connect(nodeE)
graph = new Graph([a,b,c,d,e])
console.log(a.getAdjcent())
console.log(graph.breadthFirstTraversal(a,d))
// here i will have look at breadth first search.
// it use queue to store data at the nodes.
