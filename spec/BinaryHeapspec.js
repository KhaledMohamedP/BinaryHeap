var BinaryHeap = require("../src/BinaryHeap.js");

describe("BinaryHeap test suit", function(){
    var charList = new BinaryHeap({ order: 'descending', comparable: function(x){return x.age;} });

    it("should returns min value", function(){
        charList.insert({'name': 'John', 'age': 25})
        charList.insert({'name': 'Mike', 'age': 21})
        charList.insert({'name': 'Aisha', 'age': 33})
        charList.insert({'name': 'Sarah', 'age': 20})
        charList.insert({'name': 'Tom', 'age': 100})
        charList.insert({'name': 'Alan', 'age': 18})

        var removedItem = charList.remove();

        expect(removedItem.name).toEqual("Alan");
    })

    it("Should returns an number", function(){
        expect(typeof charList.size()).toEqual("number");
    })
});