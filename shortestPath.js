const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

// converts AM -> AL
const buildGraph = (edges) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

const shortestPath = (graph, src, dest) => {
    if(src === dest) return "voila";

    const graph = buildGraph(edges);

    const queue = [src]

    while (queue.length > 0){
        const current = queue.shift();
        const count = 0;
        for (let neighbour of graph[current]){
            queue.push(neighbour);
            count++;
            if (neighbour === dest) return count;
        }
    }
    return false;
    

}