function sumTwoSmallestNums(arr){
    
    summax =0 ;
    for(let i = 0;i<arr.length ; i++){
        
        if(summax < arr[i]){
            summax = arr[i];
            sum1=summax;
        }
        
    }
    for(let i = 0;i<arr.length ; i++){
        
        
        if(sum1 > arr[i] && arr[i]>=0){
            sum1 = arr[i];
            summin=sum1;
        }
        
    }
    for(let i = 0;i<arr.length ; i++){
        
        if(summax > arr[i] && arr[i]>=0 && arr[i]!=summin ){
            summax = arr[i];
            
        }
        
    } 
    return ("(   "+arr +"   )    =>    "+ (summax+summin)) ;

}
console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));