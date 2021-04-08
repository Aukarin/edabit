function marathonDistance(arr){
    sum=0
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i]*=(-1)
        }

    }
    for(i=0;i<arr.length;i++){
        sum+=arr[i]

    }
    if(sum<25){
        return false
    }else{
        return true
    }

    
}
console.log(marathonDistance([1, 2, 3, 4]))
console.log(marathonDistance([1, 9, 5, 8, 2]))
console.log(marathonDistance([-6, 15, 4]))