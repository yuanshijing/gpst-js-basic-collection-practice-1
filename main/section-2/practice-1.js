'use strict';

module.exports = function countSameElements(collection) {
    let map = new Map();
    collection.forEach((i) =>{
        map.set(i,map.has(i)?map.get(i)+1:1);
    })
    let result = Array.from(map).map(value=>{
        return {key:value[0],count:value[1]}
    });
    return result;
}