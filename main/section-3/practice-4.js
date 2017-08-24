'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let map = new Map();
    collectionA.forEach((i) =>{
        let [val,cnt] = i.split('-');
        cnt = cnt?parseInt(cnt):1;
        map.set(val,map.has(val)?map.get(val)+cnt:cnt);
    })
    return Array.from(map).map((item) =>{
        item[1] = objectB.value.includes(item[0])? item[1]-Math.floor(item[1]/3):item[1];
        return {key:item[0],count:item[1]};
    })
}