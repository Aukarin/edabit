function isValidIP(arr){
    c=true;
    p=[];
    x=arr.split(".");
    if(x.length == 4){
        for(i=0;i<x.length;i++){
            if(x[i]>0 && x[i]<=255){
                x2=x[i].split("");
                    if(x2[0]!=0){
                        p[i]=true;
                }else{
                    p[i]=false;
                }
            }
        }
        for(i=0;i<p.length;i++){
        if(c==p[i]){
            c=true;
        }else{
            c=false;
        }
    }
        if(c==true){
            return true;

        }else{
            return false;

        }
    }
    return false;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));