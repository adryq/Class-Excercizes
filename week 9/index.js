const assert = require("assert");
// arrow functions
// const not let
// pure functions:

// map, filter and reduce.
// map in use of a forloop

// const doubleIt = (arr) => arr.map(i ==> i * 2);

// const result = doubleIt ([1,2,4]);

// console.log(result);

const assert = require("assert");

const users = [{name: 'Rommel'}, {name: 'Charlie'}, {name: 'Donnahue'}];

const getNames = (arr) => arr.map((n) => n.name);

const names = getNames(users);
const output = ['Rommel', 'Charlie', 'Donnahue'];
assert.deepEqual(names,output); // assert is a library to see if your function is true (fact check)
console.log("All tests pass");

//filter
const getEvans = (arr) => arr.filter ((i) => i % 2 === 0); 
const input = [1,2,3,4];
const expectedOutput = [2,4];

const output = getEvens(input);
assert.deepEqual(names, expectedOutput);


//reduce
const formatUser = (arr) => arr.reduce(accumulator, current) => {
    console.log(accumulator, current);  
    }, {});
    
    const input = [{name: "Rommel", interests: ["music"]}, {name: "Charlie", interests: ["travel"]}, {name: "Donnahue", interests: ["Python"],
    }];
    
    const output = {
      Rommel: ["music"],
      Charlie: ["travel"],
      Donnahue: ["Python"]
    };

    