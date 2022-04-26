const myGraph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const bfs = (graph, sourceNode) => {
    const queue = [sourceNode];
    let resultArr = [];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        resultArr.push(currentNode);

        for (let neighbour of graph[currentNode]) {
            queue.push(neighbour);
        }
    }
    return resultArr;
}

console.log(bfs(myGraph, 'c'))


const bfsPath = (graph, sourceNode, dest) => {

    if (sourceNode === dest) return true;

    const queue = [sourceNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();


        for (let neighbour of graph[currentNode]) {
            if (neighbour === dest) return true;

            queue.push(neighbour);
        }
    }
    return false;
}

console.log(bfs(myGraph, 'a', 'e'))