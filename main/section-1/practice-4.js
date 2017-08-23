'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    let arr = [];
    collectionA.map((i) => {
        i = i.key;
        arr.push(i);
    });
    return arr.filter((i =>collectionB.value.includes(i)));
}
