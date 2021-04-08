function toArray(obj){
   x= Object.entries(obj);
   /* return Object.keys(obj);
    return Object.values(obj);
    return Object.entries(obj)*/
    return x
}
console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))