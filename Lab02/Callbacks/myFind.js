
Array.prototype.myFindIndex = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};  

let arr = [1, 2, 3, 4, 5];
let foundIndex = arr.myFindIndex((item) => item % 2 === 0);
console.log(`Index of the first even number: ${foundIndex}`);


foundIndex = arr.myFindIndex((item) => item > 3);
console.log(`Index of the first number greater than 3: ${foundIndex}`);