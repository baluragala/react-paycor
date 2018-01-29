/*
7.	Code a function that uses iterable / iterator protocol to fetch keys of object and their values
Input: { name: ‘zeo’, age:20, grade:’A’}
Output: name -> zeo
	  age -> 20
	  grade -> A
*/
let input = { name: "zeo", age: 20, grade: "A" };

input[Symbol.iterator] = function () {
    let properties = Object.keys(this);
    let count = 0;
    let isDone = false;

    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[properties[count++]] };
    }

    return { next };
};

var i = 0;
for (let property of input) {
    console.log(`${Object.keys(input)[i]} -> ${property}`);
    i++;
}
