'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let map = new Map();
    collectionA.forEach((i) =>{
        map.set(i,map.has(i)?map.get(i)+1:1);
    })
    return Array.from(map).map((item) =>{
        item[1] = objectB.value.includes(item[0])?item[1] - Math.floor(item[1]/3):item[1];
        return {key:item[0],count:item[1]};
    })
}