// Adjcent list implementation 
// the class will create objects of node which has edge lists which will be its connection nodes 
class Node {
    constructor(value){
        this.value = value;
        this.edgeList = []
    }
    connect(node){
        this.edgeList.push(node)
        node.edgeList.push(this)
    }

    getAdjNode(){
        return this.edgeList.map(edge=> edge.value )
    }


    isConnected(node){
        return this.edgeList.map(edge=>edge).indexOf(node) > -1
    }
}

// this will create an object of graph (which means a array of connected nodes)
class Graph {
    constructor(nodes){
        this.nodes = [...nodes]
    }
    addToGraph(node){
        this.node.push(node)
    }
  
}









// creating new nodes 
const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')
const nodeE = new Node('E')

// connecting the graph elements.
nodeA.connect(nodeB)
nodeA.connect(nodeD)
nodeB.connect(nodeC)
nodeC.connect(nodeE)
nodeC.connect(nodeD)
nodeD.connect(nodeE)

// it is creating new graph which is a array of nodes.
const graph = new Graph([nodeA,nodeB,nodeC,nodeD,nodeE]);
for(let node of graph.nodes){
    console.log("mother node ",node.value)
    for(let item of node.edgeList){
        console.log(node.value , "is connected to " ,item.value)
    }
} 
console.log(nodeA.getAdjNode())
console.log(nodeA.isConnected(nodeE))
// console.log(nodeA)
// console.log(graph) 
