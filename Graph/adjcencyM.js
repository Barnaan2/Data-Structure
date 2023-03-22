// example of represanting a simple graph.

/*
graph that its edge has value is called weighted graph. map is weighted graph.

like the following

const adjmat = [
      [0,4,0,5,0],
      [4,0,5,0,0],
      [0,6,0,6,7],  
      [7,0,4,0,8], 
      [0,0,8,9,0],

]

*/
const vertices = ['A','B','C','D','E']
const adjmat = [
      [0,1,0,1,0],
      [1,0,1,0,0],
      [0,1,0,1,1],  
      [1,0,1,0,1], 
      [0,0,1,1,0],

]

function findAdjcentNode(node){
    // find the index of the node 
    // from the adjmat of the node find all index of item which has 1 .
    // return the vertices those had the value 1.
    const index = vertices.indexOf(node)
    let adj = []
    let nodeAdjMat = adjmat[index]
    for(let i = 0 ; i <= nodeAdjMat.length; i++){
            if(nodeAdjMat[i] === 1){
            // console.log(adjmat[index]
            adj.push(i)
            }
        }

    let adjNodes  = []
    if(adj){
        console.log(adj)
        adj.forEach(item=>{
            adjNodes.push(vertices[item])
        })
    }
        
    
    return(adjNodes)
     
}


function isConnected(fstNode,sndNode){
    const fstIndex = vertices.indexOf(fstNode);
    const sndIndex = vertices.indexOf(sndNode);
    
    let nodeAdjMat = adjmat[fstIndex];
    return nodeAdjMat[sndIndex] ===1 ? true : false;
     
}

console.log(findAdjcentNode('A'))
console.log(isConnected('A','D'))
console.log('B '+ + 'N' + 'A')
console.log('b'+'a'+ +'a'+'a')