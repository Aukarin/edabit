function sevenBoom(arr){
    x=arr.toString().split("");
   
    o=[];
    c=true;
    for(i=0;i<x.length;i++){
        if(x[i]=="7"){
            
            ans = arr+" => Boom";
            return ans ;
        }else{
            ans = arr+" => Teher is no 7 in array";
            

    }
    }
    return ans ;
}

console.log(sevenBoom([1,2,3,4,5,6,7]));
console.log(sevenBoom([8,6,33,100]));
console.log(sevenBoom([2,55,60,97,86]));