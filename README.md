# BinaryHeap
BinaryHeap Data Structure using BinaryTree-array like implementation
![Travis Buil](https://img.shields.io/travis/KhaledMohamedP/BinaryHeap.svg) ![Coverage](https://img.shields.io/travis/KhaledMohamedP/BinaryHeap.svg)

## API 
| Method| Returns Type| Description|
|-------|------------|-------------|
|size   | `int`      | returns the length of the heap| 
|insert | `object`   | returns the inserted element| 
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
#### Character
``` JavaScript
var ch = new BinaryHeap();  // Default Ascending, and compares the input

ch.insert('T');
ch.insert('S');
ch.insert('R');
ch.insert('P');
ch.insert('N');
ch.insert('O');
ch.insert('A');
ch.insert('E');
ch.insert('I');
ch.insert('H');
ch.insert('G');

ch.remove(); // T
ch.remove(); // S
ch.remove(); // R
ch.remove(); // P
ch.remove(); // O
ch.remove(); // N
ch.remove(); // I
ch.remove(); // H
ch.remove(); // G
ch.remove(); // E
ch.remove(); // A
```

#### Object
```JavaScript
var obj = new BinaryHeap({ order: 'descending', comparable: function(x){return x.age;} });

obj.insert({'name': 'John', 'age': 25})
obj.insert({'name': 'Mike', 'age': 21})
obj.insert({'name': 'Aisha', 'age': 33})
obj.insert({'name': 'Sarah', 'age': 20})
obj.insert({'name': 'Tom', 'age': 100})
obj.insert({'name': 'Alan', 'age': 18})

obj.remove(); // { name: 'Alan', age: 18 }
obj.remove(); // { name: 'Sarah', age: 20 }
obj.remove(); // { name: 'Mike', age: 21 }
obj.remove(); // { name: 'John', age: 25 }
obj.remove(); // { name: 'Aisha', age: 33 }
obj.remove(); // { name: 'Tom', age: 100 }
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