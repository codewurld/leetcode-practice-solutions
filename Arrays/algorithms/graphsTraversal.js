const myGraph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// print
const bfs = (graph, sourceNode) => {

    const queue = [sourceNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode);

        for (let neighbour of graph[currentNode]) {
            queue.push(neighbour);
        }
    }
}

// console.log(bfs(myGraph, 'a'));

const dfs = (graph, sourceNode) => {

    const stack = [sourceNode];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode);

        for (let neighbour of graph[currentNode]) {
            stack.push(neighbour);
        }
    }
}

// console.log(dfs(myGraph, 'a'));

const dfsRecursive = (graph, sourceNode) => {
    console.log(sourceNode);

    for (let neighbour of graph[sourceNode]) {
        dfsRecursive(graph, neighbour)
    }

}

// console.log(dfsRecursive(myGraph, 'a'));

const hasPath = (graph, sourceNode, destination) => {
    if (sourceNode === destination) return true;

    const queue = [sourceNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        for (let neighbour of graph[currentNode]) {
            if (neighbour === destination) return true;
            queue.push(neighbour);
        }
    }
    return false;
}

// console.log(hasPath(myGraph, 'a', 'e'))

const hasPathDFS = (graph, sourceNode, dest) => {

    if (sourceNode === dest) return true;

    const stack = [sourceNode];

    while (stack.length > 0) {
        const currentNode = stack.pop();

        for (let neighbour of graph[currentNode]) {
            if (neighbour === dest) return true;
            stack.push(neighbour);
        }
    }
    return false;
}

// console.log(hasPathDFS(myGraph, 'a', 'z'))

const hasPathRecursive = (graph, src, dest) => {
    if (src === dest) return true;


    for (let neighbour of graph[src]) {
        if (hasPathRecursive(graph, neighbour, dest)) return true;
    }
    return false;
}

console.log(hasPathRecursive(myGraph, 'a', 'e'))
