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