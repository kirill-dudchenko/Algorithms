let obj = {a:1, b:2, c: {d:4}}

let copy = {...obj} // spread, shallow copy, проходится только по верхнему уровню

let copy2 = Object.create(obj); 
// obj - прототип copy2
// console.log(copy2.a)

let copy3 = new Object(obj);

let copy4 = {}
for (let key in obj) {
    copy4[key] = obj[key]
}
// копирует только iterable свойства


// DEEP CLONE



const deepClone = (obj) => {
    let newObj = {}
    for (let key in obj) {
        if (typeof(obj[key]) !== "object") {
            newObj[key] = obj[key];
        } else {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj;
}

console.log(deepClone(obj))