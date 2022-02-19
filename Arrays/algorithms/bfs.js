// BFS

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const breadthFirstPrint = (graph, sourceNode) => {

    let queue = [sourceNode];

    while (queue.length > 0) {
        const current = queue.shift();

        console.log(current);

        for (let neighbour of graph[current]) {
            queue.push();
        }
    }
}

console.log(breadthFirstPrint(graph, 'a'));