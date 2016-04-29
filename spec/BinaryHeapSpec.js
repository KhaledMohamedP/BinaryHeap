var BinaryHeap = require("../src/BinaryHeap.js");

describe("BinaryHeap", function(){
    var charList = new BinaryHeap({ order: 'descending', comparable: function(x){return x.age;} });

    it("should returns Youngest person ", function(){
        charList.insert({'name': 'John', 'age': 25});
        charList.insert({'name': 'Mike', 'age': 21});
        charList.insert({'name': 'Alan', 'age': 18});

        var removedItem = charList.remove();

        expect(removedItem).toEqual({'name': 'Alan', 'age': 18});
    });

    it("should returns largest number", function(){

        var numberList = new BinaryHeap({ data: [2,44,90,20,3,444,2203], order: 'asc' });
        expect(numberList.remove()).toEqual(2203);
    });

    it("Should return a number", function(){
        expect(typeof charList.size()).toBe("number");
    });

    it("Should peak into the removable/highest letter", function(){
        var letterList = new BinaryHeap({ data: ["A","B","W","T","H","Y","N"], order: 'asc' });
        expect(letterList.peak()).toEqual("Y");
    });

    it("when removing from an empty set it should return null", function() {
        var emptySet = new BinaryHeap();
        expect(emptySet.remove()).toBeNull();
    });

    it("should print the list in a tree structure", function(){
        var letterList = new BinaryHeap({ data: ["A","B","W","T"], order: 'asc' });
        var tree = letterList.print();

        expect(tree).toContain("W: T B");
    });
});
