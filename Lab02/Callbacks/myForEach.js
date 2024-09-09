Array.prototype.myForEach = function(callback) {
    for (let [index, element] of this.entries()) {
        callback(element, index, this);
    }
};

const numbers = [1, 6, 2, 14, 51];

numbers.myForEach((number, index) => {
    console.log(`Number at index ${index}: ${number}`);
});