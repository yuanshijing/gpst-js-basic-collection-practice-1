'use strict';

function find(collection, ch) {
    let result = null;
    collection.forEach((i) => {
        if (i.key === ch)
            result = i;
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach((i) => {
        let obj = find(result, i)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: i, count: 1});
        }
    })
    return result;
}