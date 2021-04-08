function removeDups(arr){
   /* x2=[];
    x1=arr.toString().split(',');

    for(var i=0;i<x1.length;i++){
        c=i;
        for(var j=0;j<x1.length;j++){
            if(x1[i]==x1[c+1]){
                delete x1[c+1];
                x1[c+1]="Del";
            
            }
            c+=1;

        }
    }
    for(var i=0;i<x1.length;i++){
        if(x1[i]!="Del"){
            x2[i]=x1[i];
        }
    }*/
    
    
    return [... new Set(arr) ]
    
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));