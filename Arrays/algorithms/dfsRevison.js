const myGraph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    k: []
}

const ourGraph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}


const printGraph = (graph, sourceNode) => {

    const stack = [sourceNode];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }

    }

}

console.log(printGraph(ourGraph, 'a'));


const hasPath = (graph, sourceNode, dest) => {

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

//   recursive;

const hasPathRecursive = (graph, sourceNode, dest) => {

    if (sourceNode === dest) return true;

    for (let neighbour of graph[sourceNode]) {
        return hasPathRecursive(graph, neighbour, dest);
    }
}
