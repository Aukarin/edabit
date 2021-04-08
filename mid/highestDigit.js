function highestDigit (num){
    
    c = num.toString().split('');
    numlength= c.length;
    console.log(c);
    sum =0 ;
    for(let i = 0;i<numlength ; i++){
        
        if(sum < c[i]){
            sum = c[i]
        }
    
    }
    return sum ;
    

}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));