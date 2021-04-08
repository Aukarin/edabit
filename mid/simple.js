function simplePair(arr,m){
    let j =1;
        x=1;
    for(let i =0 ;i<(arr.length);i++){
        for(let j =1 ;j<arr.length;j++){
        if(arr[i]*arr[j] == m){
            if(i==j){
                return " [ "+arr +" ] , "+m+" => null";

            }else{
                return " [ "+arr +" ] , "+m+" => ["+arr[i]+" , "+arr[j]+"] ";
            }
        }
    }
    }

}
console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));