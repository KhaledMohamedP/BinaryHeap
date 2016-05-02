# BinaryHeap
Binary Heap Data Structure using an array implementation

[![Istanbul Coverage](https://img.shields.io/codecov/c/github/KhaledMohamedP/BinaryHeap.svg?style=flat-square)](https://github.com/KhaledMohamedP/BinaryHeap)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Version](https://img.shields.io/npm/v/binaryheap-array.svg?style=flat-square)](https://www.npmjs.com/package/binaryheap-array)
[![License](https://img.shields.io/npm/l/binaryheap-array.svg?style=flat-square)](https://www.npmjs.com/package/binaryheap-array)
[![Downloads](http://img.shields.io/npm/dm/binaryheap-array.svg?style=flat-square)](https://www.npmjs.com/package/binaryheap-array)

## Example

#### Import via NPM
```javascript
var BinaryHeap = require("binaryheap-array");
```

#### || Single element
``` javascript
var ch = new BinaryHeap();
ch.insert('T');
ch.insert('S');

// You can also chain inserts :)
ch.insert('R').insert('P');

// Removes the largest element first
ch.remove(); // 'T'

// You can also peak before you remove
ch.peak();    // 'S'
ch.remove();  // 'S'
```

#### || Object
```javascript
// Use the 'comparable' property to choose what you need to compare ahead of time
// In our example we want to compare the age
var list = new BinaryHeap({ comparable: function(elm) { return elm.age; } });
list.insert({ 'name': 'John', 'age': 25 });
list.insert({ 'name': 'Mike', 'age': 21 });
list.insert({ 'name': 'Aisha', 'age': 33 });
list.insert({ 'name': 'Sarah', 'age': 20 });

list.remove(); // { name: 'Aisha', age: 33 }
list.size(); // 3
list.remove(); // { name: 'John', age: 25 }
```

#### || Priority Queue
Create a maximum or minimum priority queue on the fly

```javascript
// Choose the order of the binaryheap ascending, or descending
var maximumPQ = new BinaryHeap({ order:'asc' });
var minimumPQ = new BinaryHeap({ order:'dec' });
```

## API
| Method| Returns Type| Description
|-------|------------ |-------------
|size   | `number`    | The size of the heap
|insert | `object`    | Adds an element to the heap
|remove | `object`    | Removes the root element (could be the max or min based on the [configuration setting](#setting))
|print  | `undefined` | Prints the tree structure of the binary heap
|peak   | `object`    | Peak on the root element, or the element that will get remove first

### Setting
| Object     | Type      | Description
|------------|-----------|------------
| order      | `string`  | The order of the BinaryHeap either 'ascending' or 'descending'
| comparable | `function`| Choose what you need to compare, default to the inserted value [see object example](#-object)
| data       | `array`   | Pass in the data as an array ahead of time and we will handle the insertion for you

### O(n)

| Type     | Worst     | Average
| -------- | --------- | --------
| insert   |  O(log n) |  O(log n)
| remove   |  O(log n) |  O(log n)
| peak     |  O(1)     |  O(1)

## Graph

This graph is a representation of the algorithm used in this module

```

               *-( (2 * i) + 1 )-˅
               *-( 2 * i )-˅     ˅
[ 'ø',  'T',  'S',  'R',  'P',  'N',  'O',  'A', ...]
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
