const graphPath = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    k: [],
}

// Iterative
const hasPath = (graph, sourceNode, destination) => {
    if (sourceNode === destination) return true;

    const stack = [sourceNode];

    while (stack.length > 0) {
        const current = stack.pop();

        for (let neighbour of graph[current]) {
            if (neighbour === destinaton) {
                return true;
            }
        }
    }
    return false;
}

// recursive

const hasPath2 = (graph, sourceNode, destination) => {

    if (sourceNode === destination) return true;

    for (let neighbour of graph[sourceNode]) {
        if (hasPath2(graph, neighbour, destination)) {
            return true;
        }
    }
    return false;
}

console.log(hasPath2(graphPath, 'f', 'k'))