/**
 *              *-----------------˅
 *              *------------˅    ˅
 *[ 'ø',  'T',  'S',  'R',  'P',  'N',  'O',  'A',...... ]
 * Empty  *------^     ^ *----------------^     ^
 *        (2 * i)      ^ *----------------------^
 *        *------------^
 *        (2 * i) + 1
 */
"use strict"; 

function BinaryHeap(options) {
    this.options = options || {
        data: null,
        comparable: null,
        order: null
    };

    this.content = ["ø"];

    // setting options
    this.options.comparable = this.options.comparable || function(x) {
        return x;
    };
    this.options.order = this.options.order || "asc";

    // protect setting not to be change ES6 const
    Object.freeze(this.options);

    // if preData is given, insert into the BinaryHeap
    if (Array.isArray(this.options.data)) {
        for (var i = 0; i < this.options.data.length; i++)
            this.insert(this.options.data[i]);
    }
}

BinaryHeap.prototype = {
    insert: function(elm) {
        this.content.push(elm);
        this.swimUp(this.size());
        return this;
    },
    remove: function() {
        var size = this.size();
        if (size === 0){return null;}
        this.exchange(1, size); // 1 = root element
        var elm = this.content.pop();
        this.sinkDown(1);
        return elm;
    },
    peak: function() {
        return this.content[1];
    },
    swimUp: function(index) {
        var parent = Math.floor(index / 2);
        while (index > 1 && this.compare(parent, index)) {
            this.exchange(parent, index);
            index = Math.floor(index / 2);
            parent = Math.floor(index / 2);
        }
    },
    sinkDown: function(k) {
        var N = this.size(),
            j;
        while (k * 2 <= N) {
            j = 2 * k;
            if (j < N && this.compare(j, j + 1)) j++;
            if (!this.compare(k, j)) break;
            this.exchange(k, j);
            k = j;
        }
    },
    compare: function(a, b) {
        var elmA = this.options.comparable(this.content[a]);
        var elmB = this.options.comparable(this.content[b]);
        if (this.options.order === "asc") {
            return this.less(elmA, elmB);
        } else {
            return this.bigger(elmA, elmB);
        }
    },
    less: function(a, b) {
        return (a < b);
    },
    bigger: function(a, b) {
        return (a > b);
    },
    exchange: function(a, b) {
        var temp = this.content[a];
        this.content[a] = this.content[b];
        this.content[b] = temp;
    },
    size: function() {
        return this.content.length - 1;
    },
    print: function() {
        var treeStruct = ""; 
        for (var i = 1; i < this.content.length; i++) {
            var childL = (2 * i);
            var childR = (2 * i) + 1;
            if (this.content[childL] || this.content[childR]){
                treeStruct += this.content[i] +": "+ this.content[childL] +" "+ this.content[childR] + "\n";
            }
        }
        return treeStruct; 
    }

};


module.exports = BinaryHeap;
