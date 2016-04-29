# BinaryHeap
Binary Heap Data Structure using an array like implementation

[![Istanbul Coverage](https://img.shields.io/codecov/c/github/KhaledMohamedP/BinaryHeap.svg?style=flat-square)](https://github.com/KhaledMohamedP/BinaryHeap)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Version](https://img.shields.io/npm/v/binaryheap-array.svg?style=flat-square)](https://www.npmjs.com/package/binaryheap-array)
[![License](https://img.shields.io/npm/l/binaryheap-array.svg?style=flat-square)](https://www.npmjs.com/package/binaryheap-array)
[![Downloads](http://img.shields.io/npm/dm/binaryheap-array.svg?style=flat-square)](https://www.npmjs.com/package/binaryheap-array)

## Example

#### Import via NPM
```Javascript
var BinaryHeap = require("binaryheap-array");
```

#### | Priority Queue
Create a maximum or minimum priority queue on the fly

```Javascript
var maximumPQ = new BinaryHeap({order:'asc'});
var minimumPQ = new BinaryHeap({order:'dec'});
```

#### | Single element
``` JavaScript
var ch = new BinaryHeap();  // Default Ascending, and compares the input

ch.insert('T').insert('S').insert('R').insert('P').insert('N').insert('O').insert('A').insert('E').insert('I').insert('H').insert('G');

ch.remove(); // T
ch.remove(); // S
```

#### | Object
```JavaScript
var obj = new BinaryHeap({ order: 'des', comparable: function(x){return x.age;} });

obj.insert({'name': 'John', 'age': 25}).insert({'name': 'Mike', 'age': 21}).insert({'name': 'Aisha', 'age': 33}).insert({'name': 'Sarah', 'age': 20}).insert({'name': 'Tom', 'age': 100}).insert({'name': 'Alan', 'age': 18})

obj.remove(); // { name: 'Alan', age: 18 }
obj.remove(); // { name: 'Sarah', age: 20 }
```


## API
| Method| Returns Type| Description
|-------|------------ |-------------
|size   | `number`    | The size of the heap
|insert | `object`    | Adds an element to the heap
|remove | `object`    | Removes the root element (could be the max or min based on the configuration)
|print  | `undefined` | Prints all the element as n-array binary tree [see graph](#graph)|
|peak   | `object`    | Peak on the root element, or the element that will get remove first

### Setting
| Object     | Type      | Description|
|------------|-----------|------------|
| order      | `string`  | The order of the BinaryHeap either ascending or descending ['asc', 'dec']
| comparable | `function`| Is used to compare the elements to sort the Binary Heap _see example above_
| data       | `array`   | Pass in the data as an array ahead of time and we will append each element by using the `.insert`

### O(n)

| Type     | Worst     | Average
| -------- | --------- | --------
| insert   |  O(log n) |  O(log n)
| remove   |  O(log n) |  O(log n)
| peak     |  O(1)     |  O(1)

## Graph

```

               *-( (2 * i) + 1 )-˅
               *-( 2 * i )-˅     ˅
[ 'ø',  'T',  'S',  'R',  'P',  'N',  'O',  'A',...... ]
  Empty  *------^     ^
         (2 * i)      ^
         *------------^
         (2 * i) + 1

```

## Reach out

Feel free to reach out with feedback via [github](https://github.com/KhaledMohamedP/BinaryHeap/issues): `issue`, `feature`, `bug`, or `enhancement` inputs are greatly appreciated

____

↳ Links: [NPM](https://www.npmjs.com/package/binaryheap-array) | [GitHub](https://github.com/KhaledMohamedP/BinaryHeap)

© MIT
