const graphPath = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    k: [],
}

const shortestPath = (graph, sourceNode, destination) => {
    if (sourceNode === destination) return 0;

    const queue = [[sourceNode, 0]];
    const visited = new Set(sourceNode);

    while (queue.length > 0) {
        let [currentNode, distance] = queue.shift();

        if (currentNode === destination) return distance;

        for (let neighbour of graph[currentNode]) {
            if (!visited.has(neighbour)) visited.add(neighbour);

            queue.push([neighbour, distance + 1]);
        }

    }
    return -1;

}

console.log(graphPath, 'f', 'k');