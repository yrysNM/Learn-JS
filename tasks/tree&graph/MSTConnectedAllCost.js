class Graph{
	constructor() {
		this.edges = {};

	}

	addVertex(vertex) {
		this.edges[vertex] = {};
	}

	addEdge(vertex1, vertex2, weight) {
		if(weight == undefined) {
			weight = 0;
		}

		this.edges[vertex1][vertex2] = weight; 
		this.edges[vertex2][vertex1] = weight;
	}

	convert() {
		let graph, key;
		for(let[k,  v] of Object.entries(this.edges)) {
			
			let arrV = Object.entries(v);
			key = +k;

		}


		let V = [],
		count = 0;
		for(let vertex  in this.edges) {
			V.push(vertex);
			count++;
		}
		graph = Matrix(count, count);
		
		// for(let i = 1; i <= count; i++) {
		// 	for (let j = 1; j <= count; j++) {
		// 		graph[i - 1][j - 1] = this.edges[V[i]][V[j]];
		// 	}
		// V[]



		for(let i = 1; i <= count; i++) {
			for(let j = 1; j <= count; j++) {
				console.log(V[i - 1], V [j - 1], i, j);
				//console.log(this.edges[V[i]][j], i, j);
				graph[i - 1][j - 1] = this.edges[V[i - 1]][V[j - 1]];
			}
		}

		for(let i = 0; i< graph.length; i++) {
			for(let j = 0;j < graph[0].length; j++) {
				if(graph[i][j] == null)
					graph[i][j] = 0;
			}
		}
		// console.log(res);
		
		return graph; 
	}

	minKey(key, mstSet) {
		let min = Infinity,
			min_index = -1;

		let V; 
		for(let vertex in this.edges) {
			V = vertex;
		}

		for(let v= 0; v < V; v++) {
			if(mstSet[v] == false && key[v] < min) {
				min = key[v];
				min_index = v;
			}
		}

		return min_index;
	}

	getVertex(graph) {
		let V = graph.length;
		return V;
// 		for(let vertex in  this.edges) {
// 			V = vertex;
// 		}
// 
// 		return V;
	}

	printMST(parent, graph) {
		let sumCost = 0;
		//console.log("Edge \tWeight");
		for(let i = 1; i < this.getVertex(graph); i++) {
			//console.log(parent[i] + " - " + i + "\t" + graph[i][parent[i]]);
			sumCost += graph[i][parent[i]];
		}
		return sumCost;
	}

	primMST(graph) {
		let V = graph.length;
	
		// for(let vertex in this.edges) {
		// 	V = vertex;
		// }

		let parent = new Array(V);

		let key = new Array(V);

		let mstSet = new Array(V);

		for(let i = 0; i < V; i++) {
			key[i] = Infinity;
			mstSet[i] = false; 
		}

		key[0] = 0;
		parent[0] = -1;

		for(let count = 0; count < V - 1; count++) {
			let u= this.minKey(key, mstSet);

			mstSet[u] = true;

			
			for(let v = 0; v < V; v++) {
				if(graph[u][v] != 0 && mstSet[v] == false && graph[u][v] < key[v]) {
					parent[v] = u; 
					key[v] = graph[u][v];
				}
			}
		}

		return this.printMST(parent, graph);
	}


}

function Matrix(rows, columns) {
	let jaggedarray = new Array(rows);

	for(let i = 0; i < columns; i++) {
		jaggedarray[i] = new Array(rows);
	}

	return jaggedarray;
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let g= new Graph();

    let v = points.length; 
    /* for(let i = 0; i <= v; i++) {
    	g.addVertex(i);
    } */
    let maxI, maxJ; 
    let edges = [];
    let arrEdge = [];

    for(let i = 0; i < points.length; i++) {
    	for(let j = i + 1; j < points.length; j++) {
    		//if(points[i][1] && points[j][1]) {

    			let weights = 
    				Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);

    			//if(points[i][1] && points[j][1]) {
    			//	if(points[i][1] != points[j][1]) {

		    			 maxI = Math.max(points[i][0], points[i][1]);
		    			 maxJ = Math.max(points[j][0], points[j][1]);
		    			 edges.push([[maxI, maxJ], weights]);
	    				for(let i = 0; i <= v; i++) {
	    					if(maxI == maxJ) {
	    						maxJ = Math.min(points[j][0], points[j][1]);
	    						
	    						g.addVertex(maxI);
	    						g.addVertex(maxJ); 	
	    					}
	    					g.addVertex(maxI);
	    					g.addVertex(maxJ); 

	    				console.log(maxI, maxJ);
	    				}
    				//}

    		//	}
    			
	    				//g.addEdges(maxJ, maxI, weights);
				//console.log(edges, weights);

    	}
    }
   let count = 1;
	while(edges.length) {
		let temp = edges.shift(); 

		let tuple = temp[0]; 
		let weight = temp[1];
	
		g.addEdge(tuple[0] , tuple[1], weight);
		/* for(let i = 0;i< tuple.length; i++) {
			console.log(weight);
		} */
	}


    //let graph = g.convert(); 
	console.log(g);
   let graph = g.convert();
   console.log(graph);

   console.log(g.primMST(graph));
};

let points = [[0,0],[1,1],[1,0],[-1,1]];
minCostConnectPoints(points);