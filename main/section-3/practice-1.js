'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map((i) =>{
        if(objectB.value.includes(i.key)) {
            i.count --;
        }
        return i;
    })
}