function oddishOrEvenish (arr){
    x=arr.toString().split("");
    j=1;
    sum=parseInt(x[0]);
    
   
    for(i=0;i<x.length;i++){
        
        if(j<x.length){
            
            sum+=parseInt(x[j]);

        }
        j++;
        
    }
    if(sum%2==0){
        return "Evenish"

    }else{
        return "Oddish"
    }
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
