function sumMissingNumbers(arr) {
    max = 0
    sum =0
    for(i=0;i<arr.length;i++){
        if(max <= arr[i] ){
            max = arr[i]
        }

    }
    min = max
    for(i=0;i<arr.length;i++){
        if(min >= arr[i] ){
            min = arr[i]
        }

    }
    for(i=0;i<arr.length;i++){
        
        if(arr[i] >arr[i+1] ){
            a = arr[i+1] 
            arr[i+1] = arr[i]
            arr[i]  = a
            
        }
       

    }
    arr.sort();
    m =0
    k=min
    j=0;
    for(i=min;i<max;i++){
        j=m 
        if(k<max){

              
        for(k;k == arr[j];k++){
           
            j++


        }
        m=j
       
        if(k<max){
            sum += k    
        }
        
        
        
    }
    k++

        
    }
    return sum

	
}
console.log(sumMissingNumbers([4, 3, 8, 1, 2]))

console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12]))

console.log(sumMissingNumbers([1, 2, 3, 4, 5]) )