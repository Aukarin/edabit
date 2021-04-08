function indexMultiplier(arr){
    num=0
    total=0
    for(i=0;i<arr.length;i++){
        x=arr[i]*num
        total+=x;
        num++
    }
    return total

}
console.log(indexMultiplier([1, 2, 3, 4, 5]))
console.log(indexMultiplier([-3, 0, 8, -6]) )