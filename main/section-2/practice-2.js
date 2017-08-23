'use strict';

module.exports = function countSameElements(collection) {
    let map = new Map();
    collection.forEach((i)=>{
        let [val,cnt]=i.split('-');
        cnt=cnt?parseInt(cnt):1;
        map.set(val,map.has(val)?map.get(val)+cnt:cnt);
    })
    let result = Array.from(map).map((item)=>{
        return {key:item[0],count:item[1]}
    });
    return result;
}
