## Example

```JavaScript
//Character
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

// Object
var obj = new BinaryHeap('descending', function(x){ return x.age; });

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
```# BinaryHeap
