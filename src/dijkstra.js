let Graph = (function (undefined) {

	let extractKeys = function (obj) {
		let keys = [], key;
		for (key in obj) {
		    Object.prototype.hasOwnProperty.call(obj,key) && keys.push(key);
		}
		return keys;
	}

	let sorter = function (a, b) {
		return parseFloat (a) - parseFloat (b);
	}

	let findPaths = function (map, start, end, infinity) {
		infinity = infinity || Infinity;

		let costs = {},
		    open = {'0': [start]},
		    predecessors = {},
		    keys;

		let addToOpen = function (cost, vertex) {
			let key = "" + cost;
			if (!open[key]) open[key] = [];
			open[key].push(vertex);
		}

		costs[start] = 0;

		while (open) {
			if(!(keys = extractKeys(open)).length) break;

			keys.sort(sorter);

			let key = keys[0],
			    bucket = open[key],
			    node = bucket.shift(),
			    currentCost = parseFloat(key),
			    adjacentNodes = map[node] || {};

			if (!bucket.length) delete open[key];

			for (let vertex in adjacentNodes) {
			    if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
					let cost = adjacentNodes[vertex],
					    totalCost = cost + currentCost,
					    vertexCost = costs[vertex];

					if ((vertexCost === undefined) || (vertexCost > totalCost)) {
						costs[vertex] = totalCost;
						addToOpen(totalCost, vertex);
						predecessors[vertex] = node;
					}
				}
			}
		}

		if (costs[end] === undefined) {
			return null;
		} else {
			return predecessors;
		}

	}

	let extractShortest = function (predecessors, end) {
		let nodes = [],
		    u = end;

		while (u !== undefined) {
			nodes.push(u);
			u = predecessors[u];
		}

		nodes.reverse();
		return nodes;
	}

	let findShortestPath = function (map, nodes) {
		let start = nodes.shift(),
		    end,
		    predecessors,
		    path = [],
		    shortest;

		while (nodes.length) {
			end = nodes.shift();
			predecessors = findPaths(map, start, end);

			if (predecessors) {
				shortest = extractShortest(predecessors, end);
				if (nodes.length) {
					path.push.apply(path, shortest.slice(0, -1));
				} else {
					return path.concat(shortest);
				}
			} else {
				return null;
			}

			start = end;
		}
	}

	let toArray = function (list, offset) {
		try {
			return Array.prototype.slice.call(list, offset);
		} catch (e) {
			let a = [];
			for (let i = offset || 0, l = list.length; i < l; ++i) {
				a.push(list[i]);
			}
			return a;
		}
	}

	let Graph = function (map) {
		this.map = map;
	}

	Graph.prototype.findShortestPath = function (start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(this.map, start);
		} else if (arguments.length === 2) {
			return findShortestPath(this.map, [start, end]);
		} else {
			return findShortestPath(this.map, toArray(arguments));
		}
	}

	Graph.findShortestPath = function (map, start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(map, start);
		} else if (arguments.length === 3) {
			return findShortestPath(map, [start, end]);
		} else {
			return findShortestPath(map, toArray(arguments, 1));
		}
	}

	return Graph;

})();

function main() {
	//let map = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};
	let map = {
		_20_10: {
			_16_10: 4
		},
		_16_10: {
			_16_6: 4,
			_15_10: 1
		},
		_16_6: {
			_16_10: 4
		},
		_15_10: {
			_15_13: 3,
			_12_10: 3,
			_16_10: 1
		},
		_15_13: {
			_15_10: 3,
			_15_14: 1,
			_12_13: 3
		},
		_15_14: {
			_15_13: 1,
		},
		_12_10: {
			_15_10: 3,
			_11_10: 1,
			_12_12: 2
		},
		_12_12: {
			_12_10: 2,
			_12_13: 1
		},
		_12_13: {
			_12_12: 1,
			_12_14: 1,
			_15_13: 3
		},
		_12_14: {
			_12_13: 1,
			_10_14: 2
		},
		_11_10: {
			_12_10: 1,
			_11_6: 4
		},
		_11_6: {
			_12_6: 1,
			_9_6: 2,
			_11_10: 4
		},
		_12_6: {
			_11_6: 1,
		},
		_9_6: {
			_9_3: 3,
			_11_6: 2,
			_4_6: 5
		},
		_9_3: {
			_9_6: 3
		},
		_4_6: {
			_4_5: 1,
			_9_6: 5,
			_4_12: 6
		},
		_4_5: {
			_4_6:1
		},
		_4_12: {
			_4_6: 6,
			_5_12: 1,
			_2_12: 2
		},
		_2_12: {
			_4_12: 2,
			_2_15: 3
		},
		_2_15: {
			_2_12: 3
		},
		_5_12: {
			_6_12: 1,
			_4_12: 1,
			_5_14: 2,
		},
		_6_12: {
			_5_12: 1
		},
		_5_14: {
			_5_12: 2,
			_10_14: 5
		},
		_10_14: {
			_5_14: 5,
			_12_14: 2,
			_10_16: 2
		},
		_10_16: {
			_10_14: 2
		}
	}
	graph = new Graph(map);

	let points = graph.findShortestPath('_20_10', '_16_6');
	func(points);
}

const func = (graphPoints) => {
	let coords = [];
	let array1, array2;
	let x1, y1 ,x2 ,y2 ;
	for (let i = 0; i< (graphPoints.length -1); i++) {
	  array1 = graphPoints[i].split('_');
	  array2 = graphPoints[i+1].split('_');
	  x1 = Number(array1[1]);
	  y1 = Number(array1[2]);
	  x2 = Number(array2[1]);
	  y2 = Number(array2[2]);
	  
	  if (x1 === x2) {
		if (y1 > y2) {
			while (y1 != y2) {
				coords.push([x1,y1--]);
			}
		} else {
			while (y1 != y2) {
				coords.push([x1,y1++]);
			}
		}
	  } else {
		
		if (x1 > x2) {
			while (x1 != x2) {
				coords.push([x1--,y1]);
			}
		} else {
			while (x1 != x2) {
				coords.push([x1++,y1]);
			}
		}

	  }
	}

	console.log(coords);
}

main();