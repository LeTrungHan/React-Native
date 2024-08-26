Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}
let arr = [1, 2, 3, 4, 5];
let newArr = arr.myFilter((item) => item % 2 === 0);
console.log(newArr); 










