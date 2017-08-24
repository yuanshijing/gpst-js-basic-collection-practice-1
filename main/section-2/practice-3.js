module.exports = function countSameElements(collection) {
    let map = new Map();
    collection.forEach((item) => {
        let cnt,val;
        if (item.length>2) {
            [val,cnt] = item.split('-');
            if(!cnt) {
                [val,cnt] = val.split(':')
            }
            if(!cnt) {
                [,val,cnt,] = val.split(/^(\w)\[(\d+)\]/)
            }
        }else {
            val = item;
        }cnt = cnt? parseInt(cnt):1;
        map.set(val,map.has(val)?map.get(val)+cnt : cnt);
    })
    let result = Array.from(map).map(value=>{
        return {name:value[0],summary:value[1]};
    })
    return result;
}
