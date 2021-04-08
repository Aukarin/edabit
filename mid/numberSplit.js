function numberSplit (x){
    var s=[];
    if((x%2) == 0){
        s= [(Math.ceil(x/2)),(Math.ceil(x/2))];
    }else{
        s= [(Math.ceil(x/2)-1),(Math.ceil(x/2))];
    }
    return(s);


    
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));