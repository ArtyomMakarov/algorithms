// recursion example
function sum(arr) {
  if (arr.length) {
    return arr[0] + sum(arr.slice(1));
  } else {
    return 0;
  }
}

console.log(sum([1, 2, 3, 4, 5]));

//binary search
function binarySearch(arr, item) {
  let countOfIterations = 0;
  let low = 0;
  let high = arr.length -1;

  while (low < high) {
    let mid = Math.round((low + high)/2);
    let guess = arr[mid];

    if( guess === item) {
      console.log('count:' + countOfIterations);
      return guess;
    }

    if (guess > item ) {
      countOfIterations++;
      high = mid -1
    } else {
      countOfIterations++;
      low = mid +1;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));

//quick sort
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let newArr = [];

    let pivot = arr[0];
    let lessArr = arr.filter( item => item < pivot );
    let biggerArr = arr.filter( item => item > pivot );


    return newArr.concat(quickSort(lessArr),pivot, quickSort(biggerArr));
  }
}

console.log(quickSort([10,5,2,3]));



//selection sort
function findSmallest(arr) {
  let indexOfSmallest = 0;

  arr.forEach( (item, index) => {
    if(item < arr[indexOfSmallest]) {
      indexOfSmallest = index;
    }
  });

  return indexOfSmallest;
}

function selectionSort(arr) {
  let newArr = [];

  for (let item of arr) {
    let indexOfSmallest = findSmallest(arr);
    newArr.push(arr[indexOfSmallest]);
    arr = arr.filter( item => item!==arr[indexOfSmallest] );
  }

  console.log(newArr);
  return newArr;
}

selectionSort([10,5,2,3]);


// Алгоритм поиска в ширину. Вычисляет кратчайший путь в невзвешенном графе.

let tree = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

let BreadthFirstSearch = (tree, rootNode, searchValue) => {
	// make a queue array
	let queue = [];
	// populate it with the node that will be the root of your search
	queue.push(rootNode);

	// search the queue until it is empty
	while (queue.length > 0) {
	// assign the top of the queue to variable currentNode
		let currentNode = queue[0];
		console.log("Current node is:" + currentNode.value);

		// if currentNode is the node we're searching for, break & alert
		if (currentNode.value === searchValue) {
			console.log("Found it!");
			return;
		}

		// if currentNode has a left child node, add it to the queue.
		if (currentNode.left !== null) {
			queue.push(tree[currentNode.left]);
		}

		// if currentNode has a right child node, add it to the queue.
		if (currentNode.right !== null) {
			queue.push(tree[currentNode.right]);
		}
		// remove the currentNode from the queue.
		queue.shift();	
    }
	console.log("Sorry, no such node found :(");	
}

BreadthFirstSearch(tree, tree[10], "12");





// Алгоритм Дейкстры. Позволяет найти самый "дешёвый" путь в направленном, взвешенном графе.

const problem = {
	start: {A: 5, B: 2},
	A: {C: 4, D: 2},
	B: {A: 8, D: 7},
	C: {D: 6, finish: 3},
	D: {finish: 1},
	finish: {}
  };
  
  const lowestCostNode = (costs, processed) => {
	return Object.keys(costs).reduce((lowest, node) => {
	  if (lowest === null || costs[node] < costs[lowest]) {
		if (!processed.includes(node)) {
		  lowest = node;
		}
	  }
	  return lowest;
	}, null);
  };
  
  // function that returns the minimum cost and path to reach Finish
  const dijkstra = (graph) => {
  
	// track lowest cost to reach each node
	const costs = Object.assign({finish: Infinity}, graph.start);
  
	// track paths
	const parents = {finish: null};
	for (let child in graph.start) {
	  parents[child] = 'start';
	}
  
	// track nodes that have already been processed
	const processed = [];
  
	let node = lowestCostNode(costs, processed);
  
	while (node) {
	  let cost = costs[node];
	  let children = graph[node];
	  for (let n in children) {
		  let newCost = cost + children[n];
		if (!costs[n]) {
		  costs[n] = newCost;
		  parents[n] = node;
		}
		if (costs[n] > newCost) {
		  costs[n] = newCost;
		  parents[n] = node;
		}
	  }
	  processed.push(node);
	  node = lowestCostNode(costs, processed);
	}
  
	let optimalPath = ['finish'];
	let parent = parents.finish;
	while (parent) {
	  optimalPath.push(parent);
	  parent = parents[parent];
	}
	optimalPath.reverse();
  
	const results = {
	  distance: costs.finish,
	  path: optimalPath
	};
  
	return results;
  };
  
  console.log(dijkstra(problem));

  










