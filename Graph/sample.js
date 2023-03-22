// example of represanting a simple graph.
const vertices = ['A','B','C','D','E','F']

// There will be more information than just vertices in edge . there will be things like distance between each nodes which are connected through those edges.
const edges = [
 ['A','B'], 
 ['B','C'], 
 ['C','E'], 
 ['C','D'],
 ['A','D'],
 ['D','E']
]
// bulb! the space complexity for a graph is normally O(v+e)
const findAdjcentNode =(node,edges)=>{
    // loop through the array and if the node is in it ?
    // if push the other node to array to return it
    let adjNode = [];
    edges.forEach(edge => {    
const nodeIndex = edge.indexOf(node)
if(!(nodeIndex== -1)){
    nodeIndex == 1 ? adjNode.push(edge[0]) : adjNode.push(edge[1]);
    
}
      
    });

    return adjNode;
}

// new method to check weather there is a connection between two nodes.
const isConnected = (fstNode,sndNode,edges) =>{
// this some method will run until the call back returns truthy
  return edges.some((edge)=>{
    return edge.indexOf(fstNode) > -1 && edge.indexOf(sndNode) > -1;
  })
}



// perfectly working wow
console.log(findAdjcentNode('B',edges))

// 
console.log(isConnected('A','B',edges))