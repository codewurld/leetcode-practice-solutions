
const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// Iterative

const depthFirstPrint = (graph, sourceNode) => {
    const stack = [sourceNode];

    while (stack.length > 0) {
        const current = stack.pop();

        console.log(current);

        for (let neighbour of graph[current]) {
            stack.push(neighbour);
        }

    }
}


console.log(depthFirstPrint(graph, 'a'));

// Recursive

const depthFirstPrint = (graph, sourceNode) => {
    console.log(sourceNode);

    for (let neighbour of graph[sourceNode]) {
        depthFirstPrint(graph, neighbour);
    }
}