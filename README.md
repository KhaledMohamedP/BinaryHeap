# BinaryHeap
BinaryHeap Data Structure using BinaryTree-array like implementation

[![Travis](https://img.shields.io/travis/KhaledMohamedP/BinaryHeap.svg?style=flat-square)](https://travis-ci.org/KhaledMohamedP/BinaryHeap)
[![Istanbul Coverage](https://img.shields.io/codecov/c/github/KhaledMohamedP/BinaryHeap.svg?style=flat-square)](https://github.com/KhaledMohamedP/BinaryHeap)
[![License](https://img.shields.io/npm/l/@khaledmohamedp/binaryheap.svg?style=flat-square)](https://www.npmjs.com/package/@khaledmohamedp/binaryheap)
[![Version](https://img.shields.io/npm/v/@khaledmohamedp/binaryheap.svg?style=flat-square)](https://www.npmjs.com/package/@khaledmohamedp/binaryheap)
[![Downloads](http://img.shields.io/npm/dm/@khaledmohamedp/binaryheap.svg?style=flat-square)](https://www.npmjs.com/package/@khaledmohamedp/binaryheap)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## API 
| Method| Returns Type| Description|
|-------|------------|-------------|
|size   | `int`      | returns the length of the heap| 
|insert | `object`   |  return `this` which allows chaining e.g `l.inset(2).insert(3)...`| 
|remove | `object`   | removing the root element  |
|print  | `undefined`| prints all the element as n-array binary tree [see graph](#graph)|
|peak   | `object`   | peak on the root element / removable element |

### Setting 
| Object     | Type      | Description| 
|------------|-----------|------------|
| order      | `string`  | `ase` [1,2,3] removing 3 first or `dec` [3,2,1] removing 1 first| 
| comparable | `function`| takes a `function` which returns the specify object to be checked is defaulted to the index element|
| data       | `array`   | e.g. `[1,2,3]` or `[ {age:12} , {age:22}, {age:33}] ` ← edit `comparable` to compare age |

### O(n)

| Type   | Worst     | Average|
|--------|-----------|--------|
| insert | O(log n)| O(log n)|
| remove | O(log n)| O(log n)| 
| peak   | O(1)    | O(1)|


## Example

### Import via NPM
```Javascript
var BinaryHeap = require("@khaledmohamedp/binaryheap");
```

### Priority Queue 
```Javascript
var maxPQ = new BinaryHeap({order:'asc'}); 
var minPQ = new BinaryHeap({order:'dec'}); 
```

#### Character
``` JavaScript
var ch = new BinaryHeap();  // Default Ascending, and compares the input

ch.insert('T').insert('S').insert('R').insert('P').insert('N').insert('O').insert('A').insert('E').insert('I').insert('H').insert('G');

ch.remove(); // T
ch.remove(); // S
...
```

#### Object
```JavaScript
var obj = new BinaryHeap({ order: 'descending', comparable: function(x){return x.age;} });

obj.insert({'name': 'John', 'age': 25}).insert({'name': 'Mike', 'age': 21}).insert({'name': 'Aisha', 'age': 33}).insert({'name': 'Sarah', 'age': 20}).insert({'name': 'Tom', 'age': 100}).insert({'name': 'Alan', 'age': 18})

obj.remove(); // { name: 'Alan', age: 18 }
obj.remove(); // { name: 'Sarah', age: 20 }
...
```

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
