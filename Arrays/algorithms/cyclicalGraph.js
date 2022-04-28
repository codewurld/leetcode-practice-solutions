const myEdges = [
    ['a', 'b'],
    ['c', 'd'],
    ['e', 'f'],
    ['g', 'h']
]


const buildGraph = (edges) => {
    const graph = {};

    for (const edge of edges) {
        const [a, b] = edge;

        if (!a in graph) graph[a] = [];
        if (!b in graph) graph[b] = [];

        graph[a].push(a);
        graph[b].push(b);
    }
    return graph;
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);

    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dest, visited) => {
    if (src === dest) return true;
    if (visited.has(src)) return false;

    visited.add(src);

    for (let neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dest, visited)) return true;
    }
    return false;
}