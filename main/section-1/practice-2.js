'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter((i) =>collectionB[0].includes(i));    
}
