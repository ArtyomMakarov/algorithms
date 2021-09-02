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




