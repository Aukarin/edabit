function countBoomerangs(arr){
    length = arr.length;
    f=0;
    m=1;
    l=2;
    sum=0;
    for(i=0;i<length;i++){
        if(l<length){
            if(arr[f]==arr[l]&&arr[f]!=arr[m]){
                sum+=1;
    
            }

        }
    
        f+=1;
        m+=1;
        l+=1;

    }
    return sum;

}


console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));